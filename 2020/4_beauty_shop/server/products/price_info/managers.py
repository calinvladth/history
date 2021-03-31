from django.db import models


class PriceInfoManager(models.Manager):

    def get(self, product):
        obj = self.filter(product=product).first()
        if obj:
            obj.flag = 'SALE' if obj.base_price < obj.old_price else None
        return obj

    def create(self, **kwargs):
        obj = self.model(**kwargs)
        obj.save(check=False)
        return obj

    def edit(self, **kwargs):
        obj = self.model.objects.get(product=kwargs['product'])

        if not obj:
            raise ValueError('Price info not found')

        obj.old_price = obj.base_price
        obj.base_price = kwargs['base_price']
        obj.save()
        return obj
