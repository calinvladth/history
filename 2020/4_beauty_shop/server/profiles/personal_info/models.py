from django.db import models

from base.models import TimeStamp
from profiles.personal_info.managers import PersonalInfoManager


class PersonalInfo(TimeStamp):
    username = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=17, blank=True)

    # Relations
    account = models.OneToOneField('accounts.Account', on_delete=models.CASCADE)
    # Managers
    objects = PersonalInfoManager()
