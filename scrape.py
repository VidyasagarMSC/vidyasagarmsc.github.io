import logging
import os
import re
import subprocess
from datetime import date

from bs4 import BeautifulSoup, FeatureNotFound
from requests import RequestException, get

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Constants
TODAY = date.today().strftime("%B %d, %Y")
BLOG_DEFAULTS = {
    "dzone_views": "550K+",
    "medium_followers": "700+",
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
        dzone_data = scrape_data(
            "div",
            "https://dzone.com/authors/vidyasagarmsc",
            {"class": "profile-content-right"},
            default=[],
        )

        if dzone_data:
            # Find all td elements within the first profile-content-right div
            td_elements = dzone_data[0].find_all("td", recursive=True)
            if len(td_elements) > 3:
                # The 4th td element contains the views count
                stats["dzone_views"] = td_elements[3].text.strip()
                logger.info(f"Scraped DZone views: {stats['dzone_views']}")
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


def render_template(template, replacements):
    """Robust template rendering with regex-based replacement"""
    try:
        # Use regex to find all {{ placeholder }} patterns
        pattern = re.compile(r"\{\{\s*([a-zA-Z0-9_]+)\s*\}\}")

        # Replace each match with the corresponding value from replacements
        def replace_match(match):
            key = match.group(1).strip()
            return str(replacements.get(key, f"{{{{ {key} }}}}"))

        return pattern.sub(replace_match, template)
    except Exception as e:
        logger.error(f"Template rendering failed: {str(e)}")
        return template


def write_template(input_path, output_path, replacements):
    """Safe template writing with error handling"""
    try:
        # Read template
        with open(input_path, "r", encoding="utf-8") as input_file:
            template = input_file.read()

        # Render template with replacements
        rendered = render_template(template, replacements)

        # Write output
        if os.path.exists(output_path):
            os.remove(output_path)

        with open(output_path, "w", encoding="utf-8") as output_file:
            output_file.write(rendered)

        logger.info(f"Successfully generated {output_path}")
        return True
    except Exception as e:
        logger.error(f"Template processing failed: {str(e)}")
        return False


def main():
    """Main execution function"""
    logger.info("Starting scraping process")

    # Scrape data
    blog_stats = scrape_blog_stats()
    social_stats = scrape_social_stats()

    # Write templates
    blog_success = write_template(
        "templates/blog_template.html", "blog.html", blog_stats
    )
    social_success = write_template(
        "templates/footer_template.html", "footer.html", social_stats
    )

    # Generate latest posts page
    try:
        logger.info("Generating latest posts page")
        result = subprocess.run(
            ["python3", "scrape_latest_posts.py"],
            capture_output=True,
            text=True,
            cwd=os.getcwd()
        )
        if result.returncode == 0:
            logger.info("Latest posts page generated successfully")
            latest_posts_success = True
        else:
            logger.error(f"Latest posts scraping failed: {result.stderr}")
            latest_posts_success = False
    except Exception as e:
        logger.error(f"Error running latest posts scraper: {str(e)}")
        latest_posts_success = False

    logger.info("Scraping process completed")
    return blog_success and social_success and latest_posts_success


if __name__ == "__main__":
    main()
