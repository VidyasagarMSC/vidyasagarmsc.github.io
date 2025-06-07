import logging
import os
import re
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
    "dzone_views": "485.3K",
    "medium_followers": "652",
    "wordpress_followers": "1.1K",
    "last_updated": TODAY,
}

SOCIAL_DEFAULTS = {
    "twitter_followers": "1.3K",
    "linkedin_followers": "3K",
    "github_followers": "90",
    "instagram_followers": "370+",
    "youtube_subscribers": "71",
    "facebook_friends": "1.1K",
    "stackoverflow_reach": "143K+",
    "mastodon_followers": "8",
}


def safe_request(url, timeout=10):
    """Safe wrapper around requests.get with error handling"""
    try:
        response = get(url, timeout=timeout)
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
    try:
        # DZone scraping - original approach
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

    except Exception as e:
        logger.error(f"DZone scraping failed: {str(e)}")

    # Rest of the function remains the same...
    try:
        # Medium scraping
        medium_data = scrape_data(
            "span",
            "https://vidyasagarmsc.medium.com",
            {"class": "pw-follower-count"},
            default=[],
        )

        if medium_data:
            child_a_tag = medium_data[0].find("a", recursive=False)
            if child_a_tag and child_a_tag.contents:
                stats["medium_followers"] = child_a_tag.contents[0].split()[0]
    except Exception as e:
        logger.error(f"Medium scraping failed: {str(e)}")

    try:
        # WordPress scraping
        wordpress_data = scrape_data(
            "div",
            "https://vmacwrites.wordpress.com/",
            {"class": "wp-block-jetpack-subscriptions__subscount"},
            default=[],
        )

        if wordpress_data:
            # Original: wordpress_followers[-1].text.split(" ")[1]
            text_parts = wordpress_data[-1].text.split()
            if len(text_parts) > 1:
                stats["wordpress_followers"] = text_parts[1]
    except Exception as e:
        logger.error(f"WordPress scraping failed: {str(e)}")

    return stats


def scrape_social_stats():
    """Scrape social media statistics with fallback to defaults"""
    stats = SOCIAL_DEFAULTS.copy()

    try:
        # GitHub scraping
        github_data = scrape_data(
            "span",
            "https://github.com/VidyasagarMSC?tab=followers",
            {"class": "text-bold color-fg-default"},
            default=[],
        )

        if github_data:
            stats["github_followers"] = github_data[0].text
    except Exception as e:
        logger.error(f"GitHub scraping failed: {str(e)}")

    # Add other social scraping functions here following the same pattern
    # ...

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
    logger.info("Scraping process completed")
    return blog_success and social_success


if __name__ == "__main__":
    main()
