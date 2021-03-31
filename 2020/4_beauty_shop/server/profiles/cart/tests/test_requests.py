from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import admin, product_list
from products.models import Product
from profiles.models import Cart


class TestCartRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        for product in product_list:
            obj = Product.objects.create(**product)
            Cart.objects.create(account=self.admin, product=obj)
            # data = {product: obj.id}

    def test_get(self):
        response = self.client.get('/profile/cart/')
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_get_product_available(self):
        response = self.client.get('/profile/cart/')

        for o in response.data['data']:
            self.assertTrue(o['product']['is_active'])

        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_create(self):
        product_data = {
            'name': 'a new product'
        }
        data = {
            'product': Product.objects.create(**product_data).id
        }
        response = self.client.post('/profile/cart/', data=data, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)

    def test_remove(self):
        cart = Cart.objects.get(account=self.admin)
        response = self.client.delete(f'/profile/cart/{cart[0].id}/')
        self.assertEqual(status.HTTP_204_NO_CONTENT, response.status_code)
