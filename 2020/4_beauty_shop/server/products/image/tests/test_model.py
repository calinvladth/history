from django.test import TestCase

from base.testing.data import product, image
from products.models import Product, Image


class TestImageModel(TestCase):
    def setUp(self):
        self.product = Product.objects.create(**product)
        self.image = Image.objects.create(product=self.product, **image)

    def test_create(self):
        self.assertTrue(self.image)

    def test_delete(self):
        self.image.delete()
        self.assertFalse(self.image.id)
