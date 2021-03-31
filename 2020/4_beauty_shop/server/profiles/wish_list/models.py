from django.db import models

from accounts.models import Account
from base.models import CreatedTimeStamp
from products.models import Product
from .managers import WishListManager


class WishList(CreatedTimeStamp):
    # Relations
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)

    objects = WishListManager()
