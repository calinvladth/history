from django.db import models


class StockManager(models.Manager):
    def get(self, **kwargs):
        obj = self.filter(**kwargs).first()
        if not obj:
            raise ValueError('Stock not found')
        return obj

    def create(self, **kwargs):
        obj = self.model(**kwargs)
        obj.save()
        return obj

    def edit(self, product, value=0, add=True, **kwargs):
        obj = self.model.objects.get(product=product)
        if 'edit_full' in kwargs and kwargs['edit_full']:
            obj.value = value
        else:
            obj.value = obj.value + value if add else obj.value - value

        obj.save()
        return obj
