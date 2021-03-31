import time

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from .managers import AccountManager


class Account(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created = models.FloatField(default=time.time())
    modified = models.FloatField(blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = AccountManager()

    def __str__(self):
        return self.email
