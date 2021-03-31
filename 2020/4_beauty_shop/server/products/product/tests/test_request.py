from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import product, admin, spec, image, price_info
from products.models import Product, Spec, PriceInfo, Image


class TestProductRequest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        self.product = Product.objects.create(**product)

    def test_get_all_basic(self):
        response = self.client.get(path='/products/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create(self):
        response = self.client.post('/products/', data=product)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_by_pk_full(self):
        response = self.client.get(path=f'/products/{self.product.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit(self):
        data = {
            'name': 'edited name',
            'description_short': 'Hola world',
            'extra_error_field': 'Will this bring an error?'
        }
        response = self.client.put(path=f'/products/{self.product.id}/', data=data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_remove(self):
        response = self.client.delete(path=f'/products/{self.product.id}/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_activate_error(self):
        response = self.client.post(path=f'/products/{self.product.id}/activate/')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_activate(self):
        PriceInfo.objects.create(product=self.product, **price_info)
        Image.objects.create(product=self.product, **image)
        Spec.objects.create(product=self.product, **spec)
        response = self.client.post(path=f'/products/{self.product.id}/activate/')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertTrue(response.data['data']['is_active'])

    def test_deactivate(self):
        response = self.client.post(path=f'/products/{self.product.id}/deactivate/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(response.data['data']['is_active'])
