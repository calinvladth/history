from django.db import models
from django.contrib.auth.models import User
import time


class LogManager(models.Manager):
    @staticmethod
    def create(log):
        if not log['admin'].is_superuser:
            raise ValueError('Unauthorized access')

        log.update(created=int(time.time()))

        log = Log(**log)
        log.save()


class Log(models.Model):
    admin = models.ForeignKey(User, on_delete=models.CASCADE)
    created_posts = models.IntegerField()
    failed_posts = models.IntegerField()
    total_posts = models.IntegerField()
    days = models.IntegerField(null=True, blank=True)
    subreddits = models.TextField(null=True, blank=True)
    status = models.IntegerField()
    created = models.IntegerField()

    objects = LogManager()
