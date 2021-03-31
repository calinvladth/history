from django.db import models
from base.models import TimeStamp
from .managers import ProductManager
from products.price_info.models import PriceInfo
from products.image.models import Image
from products.spec.models import Spec


class Product(TimeStamp):
    name = models.CharField(max_length=75)
    description_short = models.TextField(blank=True, null=True)
    description_full = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=False)

    # Managers
    objects = ProductManager()

    def save(self, check=True, *args, **kwargs):
        if check:
            if self.is_active:
                raise ValueError('Product must be inactive')

        super(Product, self).save(*args, **kwargs)

    def activate(self):
        if self.is_active:
            raise ValueError('Product is already active')

        price_info = PriceInfo.objects.filter(product=self).first()
        images = Image.objects.filter(product=self)
        specs = Spec.objects.filter(product=self)

        if not self.name:
            raise ValueError('Product name is required')

        if not self.description_short:
            raise ValueError('Product description is required')

        if not self.description_full:
            raise ValueError('Product full description is required')

        if not price_info:
            raise ValueError('Product requires a price')

        if not images:
            raise ValueError('Product needs at least an image')

        if not specs:
            raise ValueError('Product needs at least a spec')

        self.is_active = True
        self.save(check=False)
        return self

    def deactivate(self):
        self.is_active = False
        self.save()
        return self
