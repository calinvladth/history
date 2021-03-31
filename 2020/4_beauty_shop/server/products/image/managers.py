from django.db import models


class ImageManager(models.Manager):

    def get(self, pk):
        obj = self.filter(id=pk).first()
        if not obj:
            raise ValueError('Image not found')
        return obj

    def create(self, **kwargs):
        self.model.objects.check_extension(image=kwargs['path'])
        obj = self.model(**kwargs)
        obj.save()
        return obj

    @staticmethod
    def check_extension(image):
        obj = str(image)
        approved_extensions = ['.png', '.jpeg', '.jpg']
        match = False
        extension = ''

        for o in approved_extensions:
            if obj.endswith(o):
                match = True
                extension = o
                break

        if not match:
            raise ValueError('File format is invalid')

        return extension
