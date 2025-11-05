import json
import logging
import os
import time
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from xml.etree import ElementTree as ET

import requests
from bs4 import BeautifulSoup

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# RSS Feed URLs for each blog platform
BLOG_FEEDS = {
    "VMacWrites": {
        "url": "https://vmacwrites.wordpress.com/feed/",
        "website_name": "VMacWrites",
        "author": "Vidyasagar Machupalli",
        "color": "is-primary"
    },
    "Medium": {
        "url": "https://medium.com/feed/@VidyasagarMSC",
        "website_name": "Medium",
        "author": "VidyasagarMSC",
        "color": "is-info"
    },
    "DZone": {
        "url": "https://dzone.com/users/2567192/vidyasagarmsc.rss",
        "fallback_url": "https://dzone.com/authors/vidyasagarmsc",
        "website_name": "DZone",
        "author": "vidyasagarmsc",
        "color": "is-success",
        "scrape_html": True
    },
    "Dev.to": {
        "url": "https://dev.to/feed/vidyasagarmsc",
        "website_name": "Dev.to",
        "author": "vidyasagarmsc",
        "color": "is-warning"
    },
    "Substack": {
        "url": "https://vmacwrites.substack.com/feed",
        "website_name": "Substack",
        "author": "vmacwrites",
        "color": "is-danger"
    },
    "Hackernoon": {
        "url": "https://hackernoon.com/u/vidyasagarmsc/feed",
        "website_name": "Hackernoon",
        "author": "vidyasagarmsc",
        "color": "is-primary"
    }
}

# Cache configuration
CACHE_FILE = "cache/latest_posts_cache.json"
CACHE_DURATION_HOURS = 24


def safe_request(url: str, timeout: int = 10) -> Optional[Dict]:
    """Safe RSS feed request with error handling"""
    try:
        logger.info(f"Fetching RSS feed from: {url}")
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        response = requests.get(url, timeout=timeout, headers=headers)
        response.raise_for_status()

        # Parse XML
        try:
            root = ET.fromstring(response.content)

            # Convert to feedparser-like structure for compatibility
            feed_dict = {
                'feed': {'title': '', 'link': '', 'description': ''},
                'entries': []
            }

            # Extract feed info
            channel = root.find('.//channel')
            if channel is not None:
                feed_dict['feed']['title'] = channel.findtext('title', '')
                feed_dict['feed']['link'] = channel.findtext('link', '')
                feed_dict['feed']['description'] = channel.findtext('description', '')

            # Extract entries
            for item in root.findall('.//item'):
                entry = {}
                entry['title'] = item.findtext('title', '')
                entry['link'] = item.findtext('link', '')
                entry['description'] = item.findtext('description', '')
                entry['summary'] = item.findtext('summary', '') or entry['description']
                entry['published'] = item.findtext('pubDate', '')
                entry['guid'] = item.findtext('guid', '')

                # Handle different date formats
                if not entry['published']:
                    entry['published'] = item.findtext('dc:date', '')  # Dublin Core

                feed_dict['entries'].append(entry)

            return feed_dict

        except ET.ParseError as e:
            logger.error(f"XML parsing failed for {url}: {str(e)}")
            return None

    except requests.RequestException as e:
        logger.error(f"Request failed for {url}: {str(e)}")
        return None
    except Exception as e:
        logger.error(f"Feed parsing failed for {url}: {str(e)}")
        return None


def clean_html(text: str) -> str:
    """Remove HTML tags and clean up text"""
    if not text:
        return ""
    soup = BeautifulSoup(text, "lxml")
    return soup.get_text().strip()


def scrape_dzone_html(url: str) -> Optional[Dict]:
    """Scrape DZone author page HTML when RSS feed is not available"""
    try:
        logger.info(f"Scraping DZone HTML from: {url}")
        
        # Use session for better connection handling
        session = requests.Session()
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'max-age=0',
        }
        
        # Add a small delay to be polite
        time.sleep(1)
        
        response = session.get(url, timeout=15, headers=headers, allow_redirects=True)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'lxml')
        
        # Create feed-like structure
        feed_dict = {
            'feed': {'title': 'DZone', 'link': url, 'description': ''},
            'entries': []
        }
        
        # Find article cards on DZone author page
        articles = soup.find_all('article', class_='article-card')
        
        if not articles:
            # Try alternative selectors
            articles = soup.find_all('div', class_='article')
        
        for article in articles[:10]:  # Get latest 10
            try:
                entry = {}
                
                # Extract title and link
                title_elem = article.find('h2') or article.find('h3') or article.find('a', class_='article-title')
                if title_elem:
                    link_elem = title_elem.find('a') if title_elem.name != 'a' else title_elem
                    if link_elem:
                        entry['title'] = link_elem.get_text().strip()
                        entry['link'] = link_elem.get('href', '')
                        if entry['link'] and not entry['link'].startswith('http'):
                            entry['link'] = 'https://dzone.com' + entry['link']
                
                # Extract summary/description
                desc_elem = article.find('p', class_='summary') or article.find('div', class_='description')
                if desc_elem:
                    entry['summary'] = desc_elem.get_text().strip()
                else:
                    entry['summary'] = ''
                
                # Extract date
                date_elem = article.find('time') or article.find(class_='date')
                if date_elem:
                    entry['published'] = date_elem.get('datetime') or date_elem.get_text().strip()
                else:
                    entry['published'] = ''
                
                # Only add if we have at least a title and link
                if entry.get('title') and entry.get('link'):
                    entry['description'] = entry['summary']
                    entry['guid'] = entry['link']
                    feed_dict['entries'].append(entry)
                    
            except Exception as e:
                logger.error(f"Error parsing DZone article: {str(e)}")
                continue
        
        logger.info(f"Found {len(feed_dict['entries'])} articles on DZone HTML page")
        return feed_dict if feed_dict['entries'] else None
        
    except Exception as e:
        logger.error(f"Failed to scrape DZone HTML: {str(e)}")
        return None


def format_date(date_str: str) -> str:
    """Format date string to 'Month Day, Year' format"""
    try:
        if not date_str:
            return ""

        # Handle different date formats
        # First, normalize common variations
        date_str = date_str.replace('GMT', '+0000').replace('UTC', '+0000')

        # Try common date formats
        formats = [
            '%Y-%m-%dT%H:%M:%S%z',  # ISO format with timezone
            '%Y-%m-%dT%H:%M:%SZ',   # ISO format UTC
            '%a, %d %b %Y %H:%M:%S %z',  # RFC 2822 format
            '%Y-%m-%d %H:%M:%S%z',  # Simple format with timezone
            '%Y-%m-%d %H:%M:%S',    # Simple format without timezone
            '%Y-%m-%dT%H:%M:%S',    # ISO without timezone
            '%Y-%m-%d',             # Date only
        ]

        for fmt in formats:
            try:
                dt = datetime.strptime(date_str, fmt)
                return dt.strftime("%B %d, %Y")
            except ValueError:
                continue

        # If all formats fail, try to extract just the date part
        import re
        date_match = re.search(r'(\d{4}-\d{2}-\d{2})', date_str)
        if date_match:
            return datetime.strptime(date_match.group(1), '%Y-%m-%d').strftime("%B %d, %Y")

        logger.warning(f"Could not parse date: {date_str}")
        return date_str

    except Exception as e:
        logger.error(f"Date formatting failed for {date_str}: {str(e)}")
        return date_str


def extract_post_data(feed: Dict, feed_info: Dict) -> List[Dict]:
    """Extract post data from RSS feed"""
    posts = []

    if not feed or not feed.get('entries'):
        logger.warning(f"No entries found in feed: {feed_info['url']}")
        return posts

    for entry in feed['entries'][:10]:  # Get latest 10 posts per feed
        try:
            # Extract title
            title = entry.get('title', 'No Title')
            if not title or title == 'No Title':
                continue

            # Extract link
            link = entry.get('link', '')

            # Extract summary/description
            summary = entry.get('summary', '') or entry.get('description', '')
            if not summary:
                # Try to get content if available
                summary = entry.get('content', '')

            # Clean HTML from summary
            summary = clean_html(summary)

            # Truncate summary if too long
            if len(summary) > 200:
                summary = summary[:200] + "..."

            # Extract and format date
            pub_date = entry.get('published', '')
            formatted_date = format_date(pub_date)

            # Skip if no date or title
            if not formatted_date or not title:
                continue

            post = {
                'title': clean_html(title),
                'link': link,
                'summary': summary,
                'date': formatted_date,
                'website_name': feed_info['website_name'],
                'website_url': feed_info.get('website_base_url', ''),
                'color': feed_info['color'],
                'timestamp': datetime.now().isoformat()
            }

            posts.append(post)

        except Exception as e:
            logger.error(f"Error extracting post data: {str(e)}")
            continue

    return posts


def load_cache() -> Dict:
    """Load cached data from file"""
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Failed to load cache: {str(e)}")
    return {'posts': [], 'last_updated': None}


def save_cache(data: Dict) -> None:
    """Save data to cache file"""
    try:
        os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        logger.info(f"Cache saved to {CACHE_FILE}")
    except Exception as e:
        logger.error(f"Failed to save cache: {str(e)}")


def is_cache_valid(last_updated: Optional[str]) -> bool:
    """Check if cache is still valid (within 24 hours)"""
    if not last_updated:
        return False

    try:
        cache_time = datetime.fromisoformat(last_updated)
        return datetime.now() - cache_time < timedelta(hours=CACHE_DURATION_HOURS)
    except Exception as e:
        logger.error(f"Error checking cache validity: {str(e)}")
        return False


def scrape_all_feeds() -> List[Dict]:
    """Scrape all RSS feeds and return combined posts"""
    all_posts = []

    for name, feed_info in BLOG_FEEDS.items():
        logger.info(f"Scraping feed: {name}")
        feed = safe_request(feed_info['url'])

        # Try HTML scraping fallback for DZone if RSS fails
        if not feed and feed_info.get('scrape_html') and feed_info.get('fallback_url'):
            logger.info(f"RSS failed for {name}, trying HTML scraping")
            feed = scrape_dzone_html(feed_info['fallback_url'])

        if feed:
            posts = extract_post_data(feed, feed_info)
            all_posts.extend(posts)
            logger.info(f"Found {len(posts)} posts from {name}")
        else:
            logger.warning(f"Failed to fetch feed: {name}")

    # Sort posts by date (newest first)
    try:
        # Create a helper function to parse dates for sorting
        def parse_date_for_sorting(post):
            date_str = post['date']
            try:
                # Try to parse common formats for sorting
                for fmt in ['%B %d, %Y', '%Y-%m-%d', '%d/%m/%Y']:
                    try:
                        return datetime.strptime(date_str, fmt)
                    except ValueError:
                        continue
                # If parsing fails, return a very old date to put it at the end
                return datetime.min
            except Exception:
                return datetime.min

        all_posts.sort(key=parse_date_for_sorting, reverse=True)
    except Exception as e:
        logger.error(f"Error sorting posts: {str(e)}")
        # Fallback: sort by timestamp if available
        all_posts.sort(key=lambda x: x.get('timestamp', ''), reverse=True)

    return all_posts


def generate_latest_posts_html(posts: List[Dict]) -> str:
    """Generate HTML content for latest posts page"""
    html_parts = []

    # Generate filter buttons
    websites = list(set(post['website_name'] for post in posts))
    websites.sort()

    filter_html = '''
      <div class="container">
        <div class="section">
          <div class="buttons is-centered">
            <button class="button is-primary filter-btn" data-filter="all">All Posts</button>'''

    for website in websites:
        filter_html += f'''
            <button class="button is-light filter-btn" data-filter="{website}">{website}</button>'''

    filter_html += '''
          </div>
        </div>
      </div>'''

    html_parts.append(filter_html)

    # Generate posts grid
    posts_html = '''
      <div class="section">
        <div class="container">
          <div class="columns is-multiline is-centered">'''

    for post in posts:
        card_html = f'''
        <div class="column is-one-third-desktop is-half-tablet is-full-mobile post-card" data-website="{post['website_name']}">
            <div class="card {post['color']}">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <span class="tag {post['color']}">{post['website_name']}</span>
                        </div>
                        <div class="media-right">
                            <span class="has-text-grey is-size-7">{post['date']}</span>
                        </div>
                    </div>
                    <div class="content">
                        <h4 class="title is-5">
                            <a href="{post['link']}" target="_blank" class="has-text-dark">
                                {post['title']}
                            </a>
                        </h4>
                        <p class="subtitle is-6 has-text-grey">
                            {post['summary']}
                        </p>
                    </div>
                </div>
            </div>
        </div>'''
        posts_html += card_html

    posts_html += '''
          </div>
        </div>
      </div>'''
    html_parts.append(posts_html)

    # Add JavaScript for filtering
    js_html = '''
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const postCards = document.querySelectorAll('.post-card');

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');

                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('is-primary'));
                    this.classList.add('is-primary');

                    // Filter posts
                    postCards.forEach(card => {
                        const website = card.getAttribute('data-website');
                        if (filter === 'all' || website === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>'''

    html_parts.append(js_html)

    return '\n'.join(html_parts)


def main():
    """Main execution function"""
    logger.info("Starting latest posts scraping process")

    # Check cache first
    cache_data = load_cache()

    if is_cache_valid(cache_data.get('last_updated')):
        logger.info("Using cached data")
        posts = cache_data['posts']
    else:
        logger.info("Cache expired or missing, scraping fresh data")
        posts = scrape_all_feeds()

        # Update cache
        cache_data = {
            'posts': posts,
            'last_updated': datetime.now().isoformat()
        }
        save_cache(cache_data)

    # Generate HTML content
    html_content = generate_latest_posts_html(posts)

    # Write to file
    try:
        with open('latest-posts.html', 'w', encoding='utf-8') as f:
            # Read the template
            template_path = 'templates/latest-posts-template.html'
            if os.path.exists(template_path):
                with open(template_path, 'r', encoding='utf-8') as template_f:
                    template = template_f.read()
                # Get current timestamp for last updated
                current_time = datetime.now().strftime('%B %d, %Y at %I:%M %p')
                
                # Replace placeholders with generated content and timestamp
                final_html = template.replace('{{POSTS_CONTENT}}', html_content)
                final_html = final_html.replace(
                    '{{LAST_UPDATED}}',
                    current_time
                )
            else:
                # Create basic HTML structure if template doesn't exist
                final_html = f'''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Latest Blog Posts - Vidyasagar Machupalli</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
    <link href="css/style.css" rel="stylesheet" />
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>
<body>
    <section class="section">
        <div class="container">
            <h1 class="title has-text-centered">Latest Blog Posts</h1>
            <p class="subtitle has-text-centered">My recent writings across all platforms</p>
        </div>
        {html_content}
    </section>
</body>
</html>'''

            f.write(final_html)

        logger.info("Successfully generated latest-posts.html")
        logger.info(f"Total posts: {len(posts)}")

    except Exception as e:
        logger.error(f"Failed to generate HTML: {str(e)}")
        return False

    return True


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
