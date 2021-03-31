from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import product_list, account, review
from products.models import Product
from profiles.models import Review


class TestReviewRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.account = Account.objects.create_superuser(**account)
        token, _ = Token.objects.get_or_create(user=self.account)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

        for product in product_list:
            obj = Product.objects.create(**product)
            Review.objects.create(account=self.account, product=obj, **review)

    def test_get(self):
        response = self.client.get('/profile/reviews/')
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_create(self):
        product_id = Product.objects.all().first().id
        data = {
            'rating': 2,
            'review': 'Some mean review',
            'product': product_id
        }

        response = self.client.post('/profile/reviews/', data=data, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(data['rating'], response.data['data']['rating'])
        self.assertEqual(data['review'], response.data['data']['review'])
        self.assertTrue(response.data['data']['created'])

    def test_update(self):
        product_id = Product.objects.all().first().id
        data = {
            'rating': 4,
            'review': 'Some fine review',
            'product': product_id
        }

        response = self.client.put('/profile/reviews/', data=data, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(data['rating'], response.data['data']['rating'])
        self.assertEqual(data['review'], response.data['data']['review'])
        self.assertTrue(response.data['data']['modified'])

    def test_delete(self):
        product_id = Product.objects.all().first().id
        response = self.client.delete('/profile/reviews/', data={'product': product_id}, format='json')
        self.assertEqual(status.HTTP_204_NO_CONTENT, response.status_code)
        self.assertFalse(response.data['data']['id'])
