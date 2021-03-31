from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status

from base.testing.data import product, admin
from products.models import Product, Stock
from accounts.models import Account
from rest_framework.authtoken.models import Token


class TestStockRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.product = Product.objects.create(**product)
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

    def test_create(self):
        data = {'value': 20}
        response = self.client.post(f'/products/{self.product.id}/stock/', data=data, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(response.data['data']['value'], data['value'])

    def test_edit_add_stock(self):
        stock = Stock.objects.create(product=self.product, value=20)
        data = {
            'value': 15,
            'add': True
        }
        response = self.client.put(f'/products/{self.product.id}/stock/', data=data, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(stock.value + data['value'], response.data['data']['value'])

    def test_edit_remove_stock(self):
        stock = Stock.objects.create(product=self.product, value=20)
        data = {
            'value': 25,
            'add': False
        }
        response = self.client.put(f'/products/{self.product.id}/stock/', data=data, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(stock.value - data['value'], response.data['data']['value'])

    def test_edit_full_stock(self):
        Stock.objects.create(product=self.product, value=20)
        data = {
            'value': 115,
            'edit_full': True
        }
        response = self.client.put(f'/products/{self.product.id}/stock/', data=data, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(data['value'], response.data['data']['value'])
