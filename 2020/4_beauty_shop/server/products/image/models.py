from django.db import models
from .managers import ImageManager
from base.helpers.image import RenameImage
import os

rename_image = RenameImage("images")


class Image(models.Model):
    path = models.ImageField(upload_to=rename_image)
    # Relations
    product = models.ForeignKey('products.product', related_name='images', on_delete=models.CASCADE)
    # Managers
    objects = ImageManager()

    # Custom Write
    def save(self, check=True, *args, **kwargs):
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')
        super(Image, self).save(*args, **kwargs)

    def delete(self, check=True, *args, **kwargs):
        # Check product state
        # Remove image file then remove image from db
        if check and self.product.is_active:
            raise ValueError('Product must be inactive')

        if os.path.isfile(path=f'media/{str(self.path)}'):
            os.remove(path=f'media/{str(self.path)}')

        return super(Image, self).delete(*args, **kwargs)
