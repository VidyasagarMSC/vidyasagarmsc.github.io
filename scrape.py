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
    dzone_views = scrape_data(
        "p", "https://dzone.com/users/2567192/vidyasagarmsc.html", {'class': 'user-score'})
    # print(dzone_views[-1].text)
    medium_followers_content = scrape_data(
        "span", "https://vidyasagarmsc.medium.com", {'class': 'pw-follower-count'})
    # print(medium_followers_content)
    child_a_tag = medium_followers_content[0].find("a", recursive=False)
    medium_followers = child_a_tag.contents[0]
    # print(medium_followers)
    wordpress_followers = scrape_data(
        "div", "https://vmacwrites.wordpress.com/", {'class': 'wp-block-jetpack-subscriptions__subscount'})
    #print(wordpress_followers[-1].text.split(" ")[1])
    with open("templates/blog_template.html", "r") as input_file:
        file_data = input_file.read()
        file_data = file_data.replace("{{ dzone_views }}", dzone_views[-1].text) \
            .replace("{{ medium_followers }}", medium_followers.split(" ")[0]) \
            .replace("{{ wordpress_followers }}", wordpress_followers[-1].text.split(" ")[1].replace(",", "")) \
            .replace("{{ last_updated }}", today.strftime("%B %d, %Y"))

        if os.path.exists("blog.html"):
            os.remove("blog.html")
        else:
            print("The file does not exist")

    with open("blog.html", "w") as output_file:
        # print(file_data)
        output_file.write(file_data)


def scrape_socl():
    #TODO: Twitter and LinkedIN scraping to be implemented
    twitter_followers = "1296"
    # print(dzone_views[-1].text)
    linkedin_followers_content = scrape_data(
        "span", "https://www.linkedin.com/in/vidyasagarmsc/", {'class': 'top-card__subline-item'})
    
    # GITHUB
    github_followers = scrape_data(
        "span", "https://github.com/VidyasagarMSC?tab=followers", {'class': 'text-bold color-fg-default'})
    #print(github_followers[0].text)

    # INSTAGRAM
    instagram_followers = scrape_data("span", "https://instagram.com/vidyasagar.msc/", {'class': '_ac2a'})
    #print(instagram_followers)

    # YOUTUBE
    youtube_subscribers = scrape_data("class", "https://www.youtube.com/channel/UCFLWcL-ADM-BnCMxNajtXIg", {'class': 'meta-item style-scope ytd-c4-tabbed-header-renderer'})
    print(youtube_subscribers)
    with open("templates/footer_template.html", "r") as input_file:
        file_data = input_file.read()
        file_data = file_data.replace("{{ twitter_followers }}", twitter_followers) \
            .replace("{{ linkedin_followers }}", "2K") \
            .replace("{{ github_followers }}", github_followers[0].text) \
            .replace("{{ instagram_followers }}", "347") \
            .replace("{{ youtube_subscribers }}", "71")

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
    
