from django.test import TestCase

from accounts.models import Account
from base.testing.data import account, personal_info, admin
from profiles.models import PersonalInfo


class TestProfileInfoModel(TestCase):
    def setUp(self):
        self.account = Account.objects.create(**account)
        self.obj = PersonalInfo.objects.get(account=self.account)

    def test_get_or_create(self):
        self.assertTrue(self.obj)
        self.assertEqual(self.obj.account, self.account)

    def test_update(self):
        obj = PersonalInfo.objects.update(account=self.account, **personal_info)
        self.assertEqual(personal_info['username'], obj.username)
        self.assertEqual(personal_info['phone'], obj.phone)

    def test_username_error(self):
        PersonalInfo.objects.update(account=self.account, **personal_info)
        account_2 = Account.objects.create_superuser(**admin)
        PersonalInfo.objects.create(account=account_2)
        with self.assertRaisesMessage(ValueError, 'Username must be unique'):
            PersonalInfo.objects.update(account=account_2, **personal_info)
