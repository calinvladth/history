import requests
import re
from bs4 import BeautifulSoup
from flask import Flask, flash, redirect, render_template, request, session, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://vlad:1q2w3e@localhost'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

URL = 'https://www.4fit.ro/product/animal-cuts-42-pachete'

headers = {"User=Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"}

page = requests.get(URL, headers=headers)

soup = BeautifulSoup(page.content, 'html.parser')

title = soup.find("div", attrs={"class": "new-price"}).text
price = 'value: ' + re.findall(r'\d+', title)[0] + ',' +' curency: ron'



print(price)

