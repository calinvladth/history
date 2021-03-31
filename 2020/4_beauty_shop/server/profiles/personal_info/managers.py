import time

from django.db import models


class PersonalInfoManager(models.Manager):
    def get(self, account):
        obj = self.model.objects.filter(account=account).first()
        if not obj:
            obj = self.model.objects.create(account=account)

        return obj

    def update(self, account, **kwargs):
        obj = self.model.objects.get(account=account)

        for (key, value) in kwargs.items():
            if key == 'username':
                self.check_username(value, account)

            if key == 'phone':
                self.check_phone()

            setattr(obj, key, value)

        obj.modified = time.time()
        obj.save()
        return obj

    def check_username(self, username, account):
        obj = self.model.objects.filter(username=username).first()
        if obj and obj.account != account:
            raise ValueError('Username must be unique')

        return

    @staticmethod
    def check_phone():
        print('CHECK PHONE USING THE LIBRARY')
        return
