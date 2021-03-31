from django.db import models


class CartManager(models.Manager):
    def get(self, account, **kwargs):
        if 'pk' in kwargs:
            obj = self.model.objects.filter(account=account, **kwargs).first()
            return obj
        else:
            # Check is product is available or is active
            obj = self.model.objects.filter(account=account, product__is_active=True, **kwargs)
            return obj.all()
