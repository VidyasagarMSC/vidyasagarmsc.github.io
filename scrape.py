# TODO: Add concurrency and simplify the replace :)
from requests import get
from urllib.error import URLError
from bs4 import BeautifulSoup
import os


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


if __name__ == "__main__":

    dzone_views = scrape_data(
        "p", "https://dzone.com/users/2567192/vidyasagarmsc.html", {'class': 'user-score'})
    # print(dzone_views[-1].text)
    medium_followers = scrape_data(
        "a", "https://vidyasagarmsc.medium.com/", {'href': '/followers?source=user_profile-------------------------------------'})
    #print(medium_followers[-1].text.split(" ")[0])
    wordpress_followers = scrape_data(
        "div", "https://vmacwrites.wordpress.com/", {'class': 'jetpack-subscribe-count'})
    #print(wordpress_followers[-1].text.split(" ")[1])
    with open("templates/blog_template.html", "r") as input_file:
        file_data = input_file.read()
        file_data = file_data.replace("{{ dzone_views }}", dzone_views[-1].text) \
            .replace("{{ medium_followers }}", medium_followers[-1].text.split(" ")[0]) \
            .replace("{{ wordpress_followers }}", wordpress_followers[-1].text.split(" ")[1])
        if os.path.exists("blog.html"):
            os.remove("blog.html")
        else:
            print("The file does not exist")

    with open("blog.html", "w") as output_file:
        print(file_data)
        output_file.write(file_data)
