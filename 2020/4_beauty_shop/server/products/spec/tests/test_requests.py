from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import admin, product, spec
from products.models import Product, Spec


class TestSpecRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        self.product = Product.objects.create(**product)

    def test_create(self):
        response = self.client.post(f'/products/{self.product.id}/specs/', data=spec, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)

    def test_edit(self):
        _spec = Spec.objects.create(product=self.product, **spec)
        data = {
            'name': 'edited spec name',
            'value': 'edited spec value'
        }

        response = self.client.put(f'/products/{self.product.id}/specs/{_spec.id}/', data=data, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(data['name'], response.data['data']['name'])
        self.assertEqual(data['value'], response.data['data']['value'])

    def test_delete(self):
        _spec = Spec.objects.create(product=self.product, **spec)
        response = self.client.delete(f'/products/{self.product.id}/specs/{_spec.id}/')
        self.assertEqual(status.HTTP_204_NO_CONTENT, response.status_code)
