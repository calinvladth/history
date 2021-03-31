from django.test import TestCase
from ..models import Account
from .data import account, super_account


class TestAccountModel(TestCase):
    def setUp(self):
        self.superuser = Account.objects.create_superuser(**super_account)
        self.account = Account.objects.create(**account)

    def test_create_client(self):
        self.assertEqual(account['email'], self.account.email)

    def test_create_admin(self):
        data = {
            'email': 'future@admin.com',
            'creator': self.superuser
        }
        admin = Account.objects.create_admin(**data)
        self.assertFalse(admin.is_staff)
        self.assertTrue(admin.is_admin)

    def test_create_super_admin(self):
        data = {
            'email': 'future@admin.com',
            'creator': self.superuser,
            'is_staff': True
        }
        admin = Account.objects.create_admin(**data)
        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_admin)

    def test_edit(self):
        data = {
            'email': 'some@email.com',
            'password': 'NewPassword123'
        }
        edit_account = Account.objects.edit(pk=self.account.id, email=data['email'], password=data['password'])
        self.assertTrue(data['email'], edit_account.email)
