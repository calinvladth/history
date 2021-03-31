from django.test import TestCase

from accounts.models import Account
from base.testing.data import account, product_list, admin
from products.models import Product
from profiles.models import Cart


class TestCartModel(TestCase):
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
            Cart.objects.create(account=self.account, product=product)

        cart = Cart.objects.get(account=self.account)
        for cart_item in cart:
            print('CART ITEM: ', cart_item.product)
            self.assertTrue(cart_item.product.is_active)
            self.assertTrue(cart_item.quantity)

    def test_remove(self):
        for product in self.products:
            Cart.objects.create(account=self.account, product=product)

        cart = Cart.objects.get(account=self.account)
        for cart_item in cart:
            cart_item.delete()
        self.assertFalse(cart.all())

    def test_removed_product_after_creation(self):
        for product in self.products:
            Cart.objects.create(account=self.account, product=product)

        Product.objects.get(name=self.products[0].name).delete()
        cart = Cart.objects.get(account=self.account)
        for cart_item in cart:
            self.assertTrue(cart_item.product.is_active)

    def test_inactive_product(self):
        for product in self.products:
            Cart.objects.create(account=self.account, product=product)
        self.products[0].is_active = False
        self.products[0].save()

        cart = Cart.objects.get(account=self.account)

        for cart_item in cart:
            self.assertTrue(cart_item.product.is_active)
