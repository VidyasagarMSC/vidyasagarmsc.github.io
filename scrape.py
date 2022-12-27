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
        #print(soup.prettify())
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
    # TWITTER
    twitter_followers = scrape_data("text","https://camo.githubusercontent.com/8626782e57e3e0de531b281809fe9de9b80f676be51d548a054ad67a44cbf3ce/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f666f6c6c6f772f566964796173616761724d53433f7374796c653d666f722d7468652d6261646765266c6f676f3d74776974746572", {'textlength':'300'})
    #print(twitter_followers[0].text)

    #TODO: LinkedIN scraping to be implemented
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
    youtube_subscribers = scrape_data("text", "https://camo.githubusercontent.com/218812459a509b78f0515773b92dd7cabb645d2e7fa9f60749c5386b461edbb3/68747470733a2f2f696d672e736869656c64732e696f2f796f75747562652f6368616e6e656c2f73756273637269626572732f5543464c57634c2d41444d2d426e434d784e616a745849673f7374796c653d666f722d7468652d6261646765", {'textlength': '165'})
    # print(youtube_subscribers)
    with open("templates/footer_template.html", "r") as input_file:
        file_data = input_file.read()
        file_data = file_data.replace("{{ twitter_followers }}", twitter_followers[0].text) \
            .replace("{{ linkedin_followers }}", "2K") \
            .replace("{{ github_followers }}", github_followers[0].text) \
            .replace("{{ instagram_followers }}", "347") \
            .replace("{{ youtube_subscribers }}", youtube_subscribers[0].text)

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
    
