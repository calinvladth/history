from django.contrib import admin
from .models import Category, Wallet, WalletActivity

admin.site.register(Category)
admin.site.register(Wallet)
admin.site.register(WalletActivity)
