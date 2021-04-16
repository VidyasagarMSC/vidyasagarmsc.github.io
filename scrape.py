# TODO: Add concurrency and simplify the replace :)
from requests import get
from bs4 import BeautifulSoup


def scrape_data(tag, url, attributes):
    response = get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    # print(soup.prettify())
    user_score = soup.find_all(tag, attrs=attributes)
    return user_score


if __name__ == "__main__":

    dzone_views = scrape_data(
        "p", "https://dzone.com/users/2567192/vidyasagarmsc.html", {'class': 'user-score'})
    # print(dzone_views[-1].text)
    medium_followers = scrape_data(
        "a", "https://medium.com/@VidyasagarMSC", {'href': '/@VidyasagarMSC/followers'})
    #print(medium_followers[-1].text.split(" ")[0])
    wordpress_followers = scrape_data(
        "div", "https://vmacwrites.wordpress.com/", {'class': 'jetpack-subscribe-count'})
    #print(wordpress_followers[-1].text.split(" ")[1])
    with open("templates/blog_template.html", "r") as input_file:
        file_data = input_file.read()
        file_data = file_data.replace("{{ dzone_views }}", dzone_views[-1].text) \
            .replace("{{ medium_followers }}", medium_followers[-1].text.split(" ")[0]) \
            .replace("{{ wordpress_followers }}", wordpress_followers[-1].text.split(" ")[1])
    with open("blog.html", "w") as output_file:
        output_file.write(file_data)
