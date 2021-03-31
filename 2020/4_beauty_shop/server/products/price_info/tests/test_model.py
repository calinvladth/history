import json

from django.test import TestCase

from products.models import Product, PriceInfo
from base.testing.data import product, price_info

edit_data = {
    'base_price': 15
}


class TestPriceInfoModel(TestCase):
    def setUp(self):
        self.product = Product.objects.create(**product)
        self.price_info = PriceInfo.objects.create(product=self.product, **price_info)

    def test_create(self):
        self.assertEqual(self.price_info.base_price, price_info['base_price'])

    def test_edit(self):
        edited_price_info = PriceInfo.objects.edit(product=self.product, **edit_data)
        self.assertEqual(edited_price_info.base_price, edit_data['base_price'])

    def test_edit_fail(self):
        self.product.is_active = True
        self.product.save(check=False)
        with self.assertRaisesMessage(ValueError, 'Product must be inactive'):
            PriceInfo.objects.edit(product=self.product, **edit_data)
