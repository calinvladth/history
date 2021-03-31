import time

from django.db import models


class AddressManager(models.Manager):
    def get(self, account, pk, **kwargs):
        obj = self.model.objects.filter(account=account, pk=pk).first()
        if not obj:
            raise ValueError('Address not found')
        return obj

    def create_address(self, account, **kwargs):
        # If this is the first address, it will be marked default=True
        data = kwargs
        all_obj = self.model.objects.filter(account=account).count()
        if all_obj == 0:
            data['default'] = True
        obj = self.model.objects.create(account=account, **data)
        return obj

    def update(self, account, pk, **kwargs):
        obj = self.model.objects.get(account=account, pk=pk)
        for (key, value) in kwargs.items():
            if key == 'default':
                if obj.default and not value:
                    raise ValueError("""You can't perform this action""")
                if value:
                    self.unset_default(account=account)
            setattr(obj, key, value)

        obj.modified = time.time()
        obj.save()
        return obj

    def remove_address(self, account, pk):
        obj = self.model.objects.get(account=account, pk=pk)
        if obj.default:
            raise ValueError("""The default address can't be removed""")

        obj.delete()
        return obj

    def unset_default(self, account):
        objs = self.model.objects.filter(account=account)
        for o in objs:
            o.default = False
            o.save()
