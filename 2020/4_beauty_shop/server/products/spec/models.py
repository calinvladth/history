from django.db import models
from .managers import SpecManager


class Spec(models.Model):
    name = models.CharField(max_length=75)
    value = models.TextField()
    # Relations
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    # Managers
    objects = SpecManager()

    # Custom Write
    def save(self, check=True, *args, **kwargs):
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')
        super(Spec, self).save(*args, **kwargs)

    def delete(self, check=True, *args, **kwargs):
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')
        return super(Spec, self).delete(*args, **kwargs)
