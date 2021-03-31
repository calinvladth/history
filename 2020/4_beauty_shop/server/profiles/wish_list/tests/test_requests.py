from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import admin, product_list
from products.models import Product
from profiles.models import WishList


class TestWishListRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        for product in product_list:
            obj = Product.objects.create(**product)
            WishList.objects.create(account=self.admin, product=obj)
            # data = {product: obj.id}

    def test_get(self):
        response = self.client.get('/profile/wish_list/')
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_get_product_available(self):
        response = self.client.get('/profile/wish_list/')

        for wish in response.data['data']:
            self.assertTrue(wish['product']['is_active'])

        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_create(self):
        product_data = {
            'name': 'a new product'
        }
        data = {
            'product': Product.objects.create(**product_data).id
        }
        response = self.client.post('/profile/wish_list/', data=data, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)

    def test_remove(self):
        wish_list = WishList.objects.get(account=self.admin)
        response = self.client.delete(f'/profile/wish_list/{wish_list[0].id}/')
        self.assertEqual(status.HTTP_204_NO_CONTENT, response.status_code)
