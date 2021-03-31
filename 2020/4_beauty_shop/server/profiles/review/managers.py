from django.db import models
import time


class ReviewManager(models.Manager):
    def get(self, account, **kwargs):
        if 'product' in kwargs or 'pk' in kwargs:
            obj = self.model.objects.filter(account=account, **kwargs).first()
            return obj
        else:
            obj = self.model.objects.filter(account=account, **kwargs)
            return obj.all()

    def edit(self, account, product, **kwargs):
        obj = self.model.objects.get(account=account, product=product)
        for (key, value) in kwargs.items():
            setattr(obj, key, value)
        obj.modified = time.time()
        obj.save()
        return obj
