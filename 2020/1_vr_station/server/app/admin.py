from django.contrib import admin
from .models import Scans, EnterKey, ShowCase

admin.site.register(EnterKey)
admin.site.register(Scans)
admin.site.register(ShowCase)