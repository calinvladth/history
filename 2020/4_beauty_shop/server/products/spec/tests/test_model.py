from django.test import TestCase

from base.testing.data import product, spec
from products.models import Product, Spec


class TestSpecModel(TestCase):
    def setUp(self):
        self.product = Product.objects.create(**product)
        self.spec = Spec.objects.create(product=self.product, **spec)

    def test_create(self):
        self.assertEqual(self.spec.name, spec['name'])

    def test_edit(self):
        data = {
            'name': 'spec edited',
            'value': 'edited value',
            'extra_field': 'Will this bring an error?'
        }

        obj = Spec.objects.edit(pk=self.spec.id, **data)
        self.assertEqual(data['name'], obj.name)
        self.assertEqual(data['value'], obj.value)

    def test_delete(self):
        remove = self.spec.delete()
        self.assertTrue(remove[0] == 1)
