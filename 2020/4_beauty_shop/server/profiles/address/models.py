from django.db import models
from base.models import TimeStamp
from profiles.address.managers import AddressManager


class Address(TimeStamp):
    country = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    postcode = models.CharField(max_length=100)
    default = models.BooleanField(default=False)

    # Relationships
    account = models.ForeignKey('accounts.Account', on_delete=models.CASCADE)

    # Managers
    objects = AddressManager()
