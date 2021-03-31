from django.db import models
from accounts.models import Account
from products.models import Product
from base.models import CreatedTimeStamp
from .managers import CartManager


class Cart(CreatedTimeStamp):
    # Relations
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    # Managers
    objects = CartManager()
