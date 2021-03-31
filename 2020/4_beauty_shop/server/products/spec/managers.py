from django.db import models


class SpecManager(models.Manager):

    def get(self, pk):
        obj = self.filter(id=pk).first()
        if not obj:
            raise ValueError('Spec not found')
        return obj

    def create(self, **kwargs):
        obj = self.model(**kwargs)
        obj.save()
        return obj

    def edit(self, pk, **kwargs):
        obj = self.model.objects.get(pk=pk)

        for (key, value) in kwargs.items():
            setattr(obj, key, value)

        obj.save()
        return obj
