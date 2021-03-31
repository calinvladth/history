import time

from django.db import models


class ProductManager(models.Manager):
    # Requests
    def get(self, **kwargs):
        obj = self.filter(**kwargs).first()
        if not obj:
            raise ValueError('Product does not exist')
        return obj

    def create(self, **kwargs):
        if 'name' not in kwargs or not kwargs['name']:
            raise ValueError('Product name is required')

        obj = self.model(**kwargs)
        obj.save(check=False)
        return obj

    def edit(self, pk, **kwargs):
        obj = self.model.objects.get(pk=pk)
        for (key, value) in kwargs.items():
            setattr(obj, key, value)
        obj.modified = time.time()
        obj.save()
        return obj
