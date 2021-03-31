import requests

url = 'https://thegoodworld.live/api/posts/reddit/'
token = '026874141dbae134c14224b758c28ffa26115773'


def main():
    response = requests.post(url, headers={'Authorization': f'Token {token}'})
    print(response.status_code)


if __name__ == '__main__':
    main()
