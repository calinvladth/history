from django.test import TestCase

from base.testing.data import product, stock_value
from products.models import Product, Stock


class TestStockModel(TestCase):
    def setUp(self):
        self.product = Product.objects.create(**product)
        self.stock = Stock.objects.create(product=self.product, value=stock_value)

    def test_get(self):
        stock = Stock.objects.get(product=self.product)
        self.assertTrue(stock_value, stock.value)

    def test_create(self):
        self.assertTrue(stock_value, self.stock.value)

    def test_add(self):
        value = 20
        stock = Stock.objects.edit(product=self.product, value=value, add=True)
        self.assertEqual(self.stock.value + value, stock.value)

    def test_remove(self):
        value = 20
        stock = Stock.objects.edit(product=self.product, value=value, add=False)
        self.assertEqual(self.stock.value - value, stock.value)

    def test_edit(self):
        value = 127
        stock = Stock.objects.edit(product=self.product, value=value, edit_full=True)
        self.assertEqual(value, stock.value)

    def test_edit_without_value(self):
        stock = Stock.objects.edit(product=self.product, edit_full=True)
        self.assertEqual(0, stock.value)

    def test_with_product_active(self):
        self.product.is_active = True
        self.product.save(check=False)
        data = {
            'value': 20,
            'add': False,
            'product': self.product
        }
        with self.assertRaisesMessage(ValueError, 'Product must be inactive'):
            Stock.objects.edit(**data)
