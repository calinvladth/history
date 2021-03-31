import uuid
from datetime import datetime

from django.contrib.auth.models import User
from django.db import models

date = datetime.now()


class EnterKey(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    key = models.CharField(max_length=15, blank=False, null=False)

    # Track Actions
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    # Relations
    created_by = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Scans(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    name = models.CharField(max_length=25, blank=False)
    image = models.ImageField(upload_to=f'app/uploads/{date.year}/{date.month}/{date.day}/', blank=False, null=False)
    matterport = models.CharField(max_length=500, blank=False, null=False)

    # Track Actions
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    # Relations
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class ShowCase(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    # Track Actions
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(blank=True, null=True)

    # Relations
    created_by = models.OneToOneField(User, on_delete=models.CASCADE)
    scan = models.OneToOneField(Scans, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.scan)
