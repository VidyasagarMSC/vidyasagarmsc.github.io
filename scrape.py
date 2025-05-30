# TODO: Add concurrency and simplify the replace :)
from dataclasses import replace
from requests import get
from urllib.error import URLError
from bs4 import BeautifulSoup
import os
from datetime import date

today = date.today()


def scrape_data(tag, url, attributes):
    try:
        response = get(url)
    except URLError as url_error:
        print(url_error)
    else:
        soup = BeautifulSoup(response.text, 'html.parser')
        # print(soup.prettify())
        if soup:
            user_score = soup.find_all(tag, attrs=attributes)
            return user_score


def scrape_blog_stats():
    dzone_pageviews = scrape_data(
        "div", "https://dzone.com/authors/vidyasagarmsc", {'class': 'profile-content-right'})
    #print(dzone_pageviews)
    dzone_views = dzone_pageviews[0].find_all("td" , recursive=True)[3]
    # print(dzone_views[-1].text)
    medium_followers_content = scrape_data(
        "span", "https://vidyasagarmsc.medium.com", {'class': 'pw-follower-count'})
    # print(medium_followers_content)
    child_a_tag = medium_followers_content[0].find("a", recursive=False)
    medium_followers = child_a_tag.contents[0]
    # print(medium_followers)
    wordpress_followers = scrape_data(
        "div", "https://vmacwrites.wordpress.com/", {'class': 'wp-block-jetpack-subscriptions__subscount'})
    # print(wordpress_followers[-1].text.split(" ")[1])
    # wordpress_followers[-1].text.split(" ")[1].replace(",", "")) \
    # print(dzone_views)
    with open("templates/blog_template.html", "r") as input_file:
        file_data = input_file.read()
        file_data = file_data.replace("{{ dzone_views }}", dzone_views.text) \
            .replace("{{ medium_followers }}", medium_followers.split(" ")[0]) \
            .replace("{{ wordpress_followers }}", "1115") \
            .replace("{{ last_updated }}", today.strftime("%B %d, %Y"))

        if os.path.exists("blog.html"):
            os.remove("blog.html")
        else:
            print("The file does not exist")

    with open("blog.html", "w") as output_file:
        # print(file_data)
        output_file.write(file_data)


def scrape_socl():
    try:
        # TWITTER
        twitter_followers = scrape_data(
            "text", "https://camo.githubusercontent.com/8626782e57e3e0de531b281809fe9de9b80f676be51d548a054ad67a44cbf3ce/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f566964796173616761724d53433f7374796c653d666f722d7468652d6261646765266c6f676f3d74776974746572", {'textlength': '300'})
        # print(twitter_followers[0].text)

        # TODO: LinkedIN scraping to be implemented
        linkedin_followers_content = scrape_data(
            "span", "https://www.linkedin.com/in/vidyasagarmsc/", {'class': 'top-card__subline-item'})

        # GITHUB
        github_followers = scrape_data(
            "span", "https://github.com/VidyasagarMSC?tab=followers", {'class': 'text-bold color-fg-default'})
        # print(github_followers[0].text)

        # INSTAGRAM
        instagram_followers = scrape_data(
            "span", "https://instagram.com/vidyasagar.msc/", {'class': '_ac2a'})
        # print(instagram_followers)

        # YOUTUBE
        youtube_subscribers = scrape_data(
            "text", "https://camo.githubusercontent.com/218812459a509b78f0515773b92dd7cabb645d2e7fa9f60749c5386b461edbb3/68747470733a2f2f696d672e736869656c64732e696f2f796f75747562652f6368616e6e656c2f73756273637269626572732f5543464c57634c2d41444d2d426e434d784e616a745849673f7374796c653d666f722d7468652d6261646765", {'textLength': '165'})
        # print(youtube_subscribers)

        # STACKOVERFLOW
        stackoverflow_reach = scrape_data(
            "div", "https://stackoverflow.com/users/1432067/vidyasagar-machupalli", {'class': 'fs-body3 fc-dark'})

        # MASTODON
        mastodon_followers = scrape_data(
            "text", "https://camo.githubusercontent.com/cd95c0ebed387a301d92e95d5bea625a38559b996fd290cd651f1554f3b8c4fe/68747470733a2f2f696d672e736869656c64732e696f2f6d6173746f646f6e2f666f6c6c6f772f3130393337363433363832303033353830313f646f6d61696e3d687474707325334125324625324671756269742d736f6369616c2e78797a267374796c653d666f722d7468652d6261646765", {'textLength': '82.5'})

        followers_count = {"twitter_followers": "1.3K", "linkedin_followers": "2.7K", "instagram_followers": "360+", "facebook_friends": "1.1K", "github_followers": github_followers[0].text,
                           "youtube_subscribers":  youtube_subscribers[0].text, "stackoverflow_reach": stackoverflow_reach[1].text, "mastodon_followers": mastodon_followers[0].text}
        write_to_file(**followers_count)

    except Exception:
        followers_default_count = {"twitter_followers": "1.2K+", "linkedin_followers": "2.8K+", "instagram_followers": "370+",
                                   "facebook_friends": "1.1K+", "github_followers": "90", "youtube_subscribers":  "71", "stackoverflow_reach": "143K+", "mastodon_followers": "8"}
        write_to_file(**followers_default_count)


def write_to_file(**kwargs):
    with open("templates/footer_template.html", "r") as input_file:
        file_data = input_file.read()
        # twitter_followers[0].text) \
        file_data = file_data.replace("{{ twitter_followers }}", kwargs["twitter_followers"]) \
            .replace("{{ linkedin_followers }}", kwargs["linkedin_followers"]) \
            .replace("{{ github_followers }}",  kwargs["github_followers"]) \
            .replace("{{ instagram_followers }}", kwargs["instagram_followers"]) \
            .replace("{{ youtube_subscribers }}", kwargs["youtube_subscribers"]) \
            .replace("{{ facebook_friends }}", kwargs["facebook_friends"]) \
            .replace("{{ stackoverflow_reach }}", kwargs["stackoverflow_reach"]) \
            .replace("{{ mastodon_followers }}", kwargs["mastodon_followers"])

    if os.path.exists("footer.html"):
        os.remove("footer.html")
    else:
        print("The file does not exist")

    with open("footer.html", "w") as output_file:
        # print(file_data)
        output_file.write(file_data)


if __name__ == "__main__":
    scrape_blog_stats()
    scrape_socl()
