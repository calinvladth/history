from datetime import date

admin = {
    'email': 'test@admin.com',
    'password': 'Pwd1q2w3e'
}

account = {
    'email': 'test@client.com',
    'password': 'Pwd1q2w3e'
}

product = {
    'name': 'beauty cream',
    'description_short': 'lorem ipsum',
    'description_full': 'lorem ipsum dolor sit amet'
}

product_list = [
    {'name': 'beauty cream', 'is_active': True},
    {'name': 'hand cream', 'is_active': True},
    {'name': 'feet cream', 'is_active': False}
]

price_info = {
    'base_price': 23.99
}

path = 'image.jpg'

image = {
    'path': path
}

spec = {
    'name': 'quantity',
    'value': '4 x 4 x 6'
}

stock_value = 25

review = {
    'rating': 4,
    'review': 'Some new comment on the product'
}

personal_info = {
    'username': 'vlad',
    'phone': '+40727223737',
}

address = {
    'first_name': 'Vlad',
    'last_name': 'Calin',
    'phone': '+40727223737',
    'country': 'Germany',
    'state': 'BadenWurtemberg',
    'city': 'Pforzheim',
    'street': 'HoheneckStraße',
    'house': '5',
    'postcode': '75180'
}
