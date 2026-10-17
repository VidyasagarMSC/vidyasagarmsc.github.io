import json
import logging
import os
import re
from datetime import date, datetime

from bs4 import BeautifulSoup, FeatureNotFound
from requests import RequestException, get

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Constants
TODAY = date.today().strftime("%B %d, %Y")
# Every key stats.json is expected to hold must appear here. write_stats_json
# merges over the existing file, but a key absent from this dict has no fallback
# and no scraper, so a scrape failure would leave it stale rather than absent.
#
# dzone_articles is deliberately NOT scraped. DZone's public profile reports a
# lower articleCount than the author dashboard -- it read 60 against 109 -- because
# the public page surfaces a subset. Scraping it would overwrite the author's real
# total with a subset every week. It is maintained by hand from the dashboard, and
# js/site.js SITE_STATS is the figure the site renders.
BLOG_DEFAULTS = {
    "dzone_views": "656.8K",
    "dzone_articles": "109",
    "dzone_reputation": "7348",
    "medium_followers": "717",
    "wordpress_followers": "1.1K",
    "last_updated": TODAY,
}

SOCIAL_DEFAULTS = {
    "twitter_followers": "1.3K",
    "linkedin_followers": "3K+",
    "github_followers": "100+",
    "instagram_followers": "370+",
    "youtube_subscribers": "75",
    "facebook_friends": "1.1K",
    "stackoverflow_reach": "150K+",
    "mastodon_followers": "8",
}

STATS_FILE = "public/data/stats.json"



def safe_json_request(url, timeout=10):
    """Safe wrapper around requests.get for JSON APIs"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        response = get(url, timeout=timeout, headers=headers)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        logger.error(f"JSON request failed for {url}: {str(e)}")
        return None

def safe_request(url, timeout=10):
    """Safe wrapper around requests.get with error handling and browser headers"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        response = get(url, timeout=timeout, headers=headers)
        response.raise_for_status()
        return response
    except RequestException as e:
        logger.error(f"Request failed for {url}: {str(e)}")
        return None


def parse_html(content, parser="html.parser"):
    """Safe HTML parsing with error handling"""
    try:
        return BeautifulSoup(content, parser) if content else None
    except FeatureNotFound:
        try:
            return BeautifulSoup(content, "html5lib")
        except Exception as e:
            logger.error(f"HTML parsing failed: {str(e)}")
            return None
    except Exception as e:
        logger.error(f"HTML parsing failed: {str(e)}")
        return None


def scrape_data(tag, url, attributes, default=None):
    """Robust scraping function with error handling"""
    try:
        response = safe_request(url)
        if not response:
            return default
        soup = parse_html(response.text)
        if not soup:
            return default
        elements = soup.find_all(tag, attrs=attributes)
        return elements if elements else default
    except Exception as e:
        logger.error(f"Scraping failed for {url}: {str(e)}")
        return default


def scrape_blog_stats():
    """Scrape blog statistics with fallback to defaults"""
    stats = BLOG_DEFAULTS.copy()
    
    # DZone scraping
    try:
        dzone_resp = safe_request("https://dzone.com/authors/vidyasagarmsc")
        dzone_soup = parse_html(dzone_resp.text) if dzone_resp is not None else None

        # The profile renders its figures as a labelled block, e.g.
        #   "Reputation: 7206 Pageviews: 652.6K Articles: 60 Comments: 7"
        # Read reputation and views from that. The td-based selector this replaced
        # matched nothing, so the code below it silently kept the hardcoded default
        # and the figure never moved.
        #
        # Articles is read from that block for reporting only and never written:
        # the public count is a subset of the author dashboard's total.
        flat = re.sub(r"\s+", " ", dzone_soup.get_text(" ", strip=True)) if dzone_soup else ""

        def field(label):
            m = re.search(label + r":?\s*([\d.,]+[KMB]?)", flat, re.I)
            return m.group(1) if m else None

        views = field("Pageviews")
        if views:
            if views != stats["dzone_views"]:
                logger.info(f"DZone views {stats['dzone_views']} -> {views}")
            stats["dzone_views"] = views
        else:
            logger.warning(
                "DZone pageviews not found on the profile page; keeping %s. "
                "DZone returns 403 to plain requests, so this is expected when the "
                "scrape is blocked and the figure will be stale until it is not."
                % stats["dzone_views"]
            )

        rep = field("Reputation")
        if rep:
            if rep != stats["dzone_reputation"]:
                logger.info(f"DZone reputation {stats['dzone_reputation']} -> {rep}")
            stats["dzone_reputation"] = rep

        public_articles = field("Articles")
        if public_articles:
            logger.info(
                "DZone public article count reads %s; SITE_STATS quotes %s from the "
                "author dashboard. Not written -- the public page shows a subset."
                % (public_articles, stats["dzone_articles"])
            )
    except Exception as e:
        logger.error(f"DZone scraping failed: {str(e)}")

    # Medium scraping
    try:
        # Medium is tricky, try catching the followers count from metadata if direct scraping fails
        response = safe_request("https://medium.com/@VidyasagarMSC")
        if response:
            soup = parse_html(response.text)
            # Try meta tag first
            # Meta description often contains "read writing from X. Y followers."
            meta = soup.find("meta", {"name": "description"})
            if meta and "followers" in meta["content"]:
                import re
                match = re.search(r'([\d.,K]+) Followers', meta["content"], re.IGNORECASE)
                if match:
                    stats["medium_followers"] = match.group(1)
                    logger.info(f"Scraped Medium followers (meta): {stats['medium_followers']}")
            else:
                 # Fallback to scraping
                 elements = soup.find_all("span", class_="pw-follower-count")
                 if elements:
                     child_a = elements[0].find("a")
                     if child_a:
                         stats["medium_followers"] = child_a.text.split()[0]
                         logger.info(f"Scraped Medium followers (html): {stats['medium_followers']}")
    except Exception as e:
        logger.error(f"Medium scraping failed: {str(e)}")

    # WordPress scraping
    try:
        wordpress_data = scrape_data(
            "div",
            "https://vmacwrites.wordpress.com/",
            {"class": "wp-block-jetpack-subscriptions__subscount"},
            default=[],
        )

        if wordpress_data:
            text_parts = wordpress_data[-1].text.split()
            if len(text_parts) > 1:
                stats["wordpress_followers"] = text_parts[1]
                logger.info(f"Scraped WordPress followers: {stats['wordpress_followers']}")
    except Exception as e:
        logger.error(f"WordPress scraping failed: {str(e)}")
    
    # Add current timestamp
    from datetime import datetime
    stats['last_updated'] = datetime.now().strftime('%B %d, %Y at %I:%M %p')

    return stats


def scrape_social_stats():
    """Scrape social media statistics with fallback to defaults"""
    stats = SOCIAL_DEFAULTS.copy()

    # GitHub API
    try:
        github_data = safe_json_request("https://api.github.com/users/VidyasagarMSC")
        if github_data and 'followers' in github_data:
            stats["github_followers"] = str(github_data['followers'])
            logger.info(f"Fetched GitHub followers: {stats['github_followers']}")
    except Exception as e:
        logger.error(f"GitHub API failed: {str(e)}")

    # Dev.to API
    try:
        # Dev.to API doesn't expose followers directly in the public user object without auth
        # But we can try to parse it from the profile page with our improved headers
        response = safe_request("https://dev.to/vidyasagarmsc")
        if response:
             # Look for "Followers" text often in sidebars
             # This is fragile so we might stick to default if it fails
             pass
    except Exception as e:
        logger.error(f"Dev.to scraping failed: {str(e)}")

    return stats


def write_stats_json(stats):
    """Write scraped stats to a JSON file consumed by the frontend JS.

    Merged over whatever is already in the file. Writing the scrape result
    wholesale deleted every key no scraper produces: dzone_articles and
    dzone_reputation were absent from BLOG_DEFAULTS, so every Saturday the job
    removed them and reverted dzone_views to a hardcoded default. The site's
    figures were rolled back weekly, which is how they stayed stale for so long
    without anyone noticing -- the job reported success.
    """
    try:
        os.makedirs(os.path.dirname(STATS_FILE), exist_ok=True)
        existing = {}
        if os.path.exists(STATS_FILE):
            try:
                with open(STATS_FILE, encoding="utf-8") as f:
                    existing = json.load(f)
            except (json.JSONDecodeError, OSError) as e:
                logger.warning(f"Could not read existing {STATS_FILE}, overwriting: {e}")
        merged = {**existing, **stats}
        dropped = sorted(set(existing) - set(merged))
        if dropped:
            logger.warning(f"keys would be dropped, preserving them instead: {dropped}")
        with open(STATS_FILE, "w", encoding="utf-8") as f:
            json.dump(merged, f, indent=2)
            f.write("\n")
        logger.info(f"Stats written to {STATS_FILE} ({len(merged)} keys)")
        return True
    except Exception as e:
        logger.error(f"Failed to write stats JSON: {str(e)}")
        return False


def main():
    """Main execution function"""
    logger.info("Starting scraping process")

    # Scrape data
    blog_stats = scrape_blog_stats()
    social_stats = scrape_social_stats()

    # Merge all stats
    all_stats = {**blog_stats, **social_stats, "last_updated": datetime.now().strftime('%B %d, %Y at %I:%M %p')}

    # Write JSON consumed by frontend JS
    write_stats_json(all_stats)

    logger.info("Scraping process completed")
    return True


if __name__ == "__main__":
    main()
