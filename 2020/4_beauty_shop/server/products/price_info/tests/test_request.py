from django.test import TestCase
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
from rest_framework import status

from accounts.models import Account
from base.testing.data import admin, product, price_info
from products.models import Product, PriceInfo


class TestPriceInfoRequest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        self.product = Product.objects.create(**product)

    def test_create_request(self):
        response = self.client.post(f'/products/{self.product.id}/price_info/', data=price_info, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)

    def test_update_request(self):
        PriceInfo.objects.create(product=self.product, **price_info)
        data = {
            'base_price': 15.00
        }
        response = self.client.post(f'/products/{self.product.id}/price_info/', data=data, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(price_info['base_price'], float(response.data['data']['old_price']))
        self.assertEqual(data['base_price'], float(response.data['data']['base_price']))
