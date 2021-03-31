from django.test import TestCase
from profiles.models import Review
from accounts.models import Account
from products.models import Product
from base.testing.data import product, account, review


class TestReviewModel(TestCase):
    def setUp(self):
        self.account = Account.objects.create(**account)
        self.product = Product.objects.create(**product)
        self.review = Review.objects.create(account=self.account, product=self.product, **review)

    def test_get(self):
        obj = Review.objects.get(account=self.account, pk=self.review.id, product=self.product)
        self.assertTrue(obj)

    def test_create(self):
        self.assertEqual(review['rating'], self.review.rating)
        self.assertEqual(review['review'], self.review.review)
        self.assertEqual(self.account, self.review.account)
        self.assertEqual(self.product, self.review.product)

    def test_update(self):
        data = {
            'rating': 3,
            'review': 'Some edited review'
        }
        obj = Review.objects.edit(product=self.product, account=self.account, **data)
        self.assertEqual(data['rating'], obj.rating)
        self.assertEqual(data['review'], obj.review)
        self.assertEqual(self.account, obj.account)
        self.assertEqual(self.product, obj.product)

    def test_delete(self):
        obj = self.review.delete()
        self.assertEqual(1, obj[0])
