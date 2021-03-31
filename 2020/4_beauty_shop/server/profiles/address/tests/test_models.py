from django.test import TestCase

from accounts.models import Account
from base.testing.data import account, address
from profiles.address.models import Address


class TestAddressModel(TestCase):
    def setUp(self):
        self.account = Account.objects.create(**account)
        self.address = Address.objects.create_address(account=self.account, **address)
        self.address_2 = Address.objects.create_address(account=self.account, **address)

    def test_get_all(self):
        objs = Address.objects.filter(account=self.account)
        self.assertTrue(objs != 0)

    def test_create(self):
        self.assertEqual(address['first_name'], self.address.first_name)
        self.assertTrue(self.address.default)

    def test_create_second(self):
        self.assertEqual(address['last_name'], self.address_2.last_name)
        self.assertFalse(self.address_2.default)

    def test_get_by_pk(self):
        obj = Address.objects.get(account=self.account, pk=self.address.pk)
        self.assertTrue(obj)

    def test_update(self):
        obj = Address.objects.update(account=self.account, pk=self.address_2.pk, default=True)
        objs = Address.objects.filter(account=self.account)
        for o in objs:
            if o.pk == obj.pk:
                self.assertTrue(o.default)
            else:
                self.assertFalse(o.default)
        self.assertEqual(self.account, obj.account)
        self.assertTrue(obj.default)

    def test_delete(self):
        obj = Address.objects.remove_address(account=self.account, pk=self.address_2.pk)
        self.assertFalse(obj.pk)

    def test_delete_default_address(self):
        with self.assertRaisesMessage(ValueError, """The default address can't be removed"""):
            Address.objects.remove_address(account=self.account, pk=self.address.pk)
