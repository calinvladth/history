from django.test import TestCase

from base.testing.data import product, price_info, image, spec
from products.models import Product, PriceInfo, Image, Spec


class TestProductModel(TestCase):
    def setUp(self):
        self.product = Product.objects.create(**product)
        PriceInfo.objects.create(product=self.product, **price_info)
        Image.objects.create(product=self.product, **image)
        Spec.objects.create(product=self.product, **spec)

    def test_product_creation(self):
        self.assertEqual(self.product.name, product['name'])

    def test_product_edit(self):
        data = {
            'name': 'edited name',
            'description_short': 'Hola world',
            'extra_error_field': 'Will this bring an error?'
        }
        response = Product.objects.edit(pk=self.product.id, **data)
        self.assertTrue(response.name, data['name'])
        self.assertTrue(response.description_short, data['description_short'])

    def test_product_delete(self):
        removed = self.product.delete()
        self.assertTrue(removed[0] != 0)

    def test_activation(self):
        self.product.activate()
        self.assertTrue(self.product.is_active)

    def test_deactivation(self):
        self.product.is_active = True
        self.product.save(check=False)
        self.assertTrue(self.product.is_active)
        self.product.deactivate()
        self.assertFalse(self.product.is_active)
