from django.db import models

from .managers import PriceInfoManager


class PriceInfo(models.Model):
    base_price = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    old_price = models.DecimalField(max_digits=6, decimal_places=2, default=0)

    # Relations
    product = models.OneToOneField('products.Product', related_name='price_info', on_delete=models.CASCADE)

    objects = PriceInfoManager()

    # Custom save
    def save(self, check=True, *args, **kwargs):
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')
        super(PriceInfo, self).save(*args, **kwargs)
