from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100)
    belongs_to = models.ForeignKey('my_account.Account', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Wallet(models.Model):
    # user -> account | One to one relation
    primary = models.BooleanField(default=True)
    account = models.FloatField()
    belongs_to = models.OneToOneField('my_account.Account', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.account)


class WalletActivity(models.Model):
    # track wallet's account changes
    amount = models.FloatField(blank=False, null=False)
    revenue = models.BooleanField(blank=False, null=False)
    # account_before_changes = models.FloatField(blank=False, null=False)
    # account_after_changes = models.FloatField(blank=False, null=False)
    wallet = models.ForeignKey(Wallet, on_delete=models.CASCADE)
    belongs_to = models.ForeignKey('my_account.Account', on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    additional_info = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.revenue)
