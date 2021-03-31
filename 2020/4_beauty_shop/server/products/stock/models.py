from django.db import models

from .managers import StockManager


class Stock(models.Model):
    value = models.IntegerField(default=0)
    product = models.ForeignKey('products.Product', related_name='stock', on_delete=models.CASCADE)

    objects = StockManager()

    # Custom Write
    def save(self, check=True, *args, **kwargs):
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')
        super(Stock, self).save(*args, **kwargs)

    def delete(self, check=True, *args, **kwargs):
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')
        return super(Stock, self).delete(*args, **kwargs)
