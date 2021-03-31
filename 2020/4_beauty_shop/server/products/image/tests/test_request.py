from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import product, admin, image
from products.models import Product, Image


class TestImageRequest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.admin = Account.objects.create_superuser(**admin)
        token, _ = Token.objects.get_or_create(user=self.admin)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        self.product = Product.objects.create(**product)

    def test_create(self):
        response = self.client.post(f'/products/{self.product.id}/images/', data=image, format='json')
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)

    def test_remove(self):
        _image = Image.objects.create(product=self.product, **image)
        response = self.client.delete(f'/products/{self.product.id}/images/{_image.id}/')
        self.assertEqual(status.HTTP_204_NO_CONTENT, response.status_code)
