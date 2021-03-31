from django.test import TestCase

from accounts.models import Account
from base.testing.data import account, product_list, admin
from products.models import Product
from profiles.models import WishList


class TestWishListModel(TestCase):
    def setUp(self):
        # Create Admin
        Account.objects.create_superuser(**admin)
        # Create products from list
        for product in product_list:
            Product.objects.create(**product)

        self.products = Product.objects.all()
        self.account = Account.objects.create(**account)

    def test_create(self):
        for product in self.products:
            WishList.objects.create(account=self.account, product=product)

        wish_list = WishList.objects.get(account=self.account)
        for wish in wish_list:
            self.assertTrue(wish.product.is_active)

    def test_remove(self):
        for product in self.products:
            WishList.objects.create(account=self.account, product=product)

        wish_list = WishList.objects.get(account=self.account)
        for o in wish_list:
            o.delete()
        self.assertFalse(wish_list.all())

    def test_removed_product_after_creation(self):
        for product in self.products:
            WishList.objects.create(account=self.account, product=product)

        Product.objects.get(name=self.products[0].name).delete()
        wish_list = WishList.objects.get(account=self.account)
        for wish in wish_list:
            self.assertTrue(wish.product.is_active)

    def test_inactive_product(self):
        for product in self.products:
            WishList.objects.create(account=self.account, product=product)
        self.products[0].is_active = False
        self.products[0].save()

        wish_list = WishList.objects.get(account=self.account)

        for wish in wish_list:
            self.assertTrue(wish.product.is_active)
