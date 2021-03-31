from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework import status

from ..models import Log


class TestModel(TestCase):
    def setUp(self):
        User.objects.create_superuser(
            email="office@theoscoding.com",
            username="theoscoding",
            password="Pwd1q2w3e"
        )
        User.objects.create_user(
            email="calinvlad.t@gmail.com",
            username="vlad",
            password="Pwd1q2w3e"
        )
        admin = User.objects.get(username="theoscoding")
        self.user = User.objects.get(username="vlad")
        self.log = {
            "admin": admin,
            "status": status.HTTP_200_OK,
            "total_posts": 50,
            "created_posts": 20,
            "failed_posts": 30
        }

    def test_create(self):
        Log.objects.create(self.log)
        log = Log.objects.get(created=self.log['created'])
        self.assertEquals(log.created, self.log['created'])

    def test_unauthorized_create(self):
        self.log['admin'] = self.user

        with self.assertRaises(ValueError) as ctx:
            Log.objects.create(self.log)
        self.assertEqual('Unauthorized access', str(ctx.exception))

    def test_get(self):
        Log.objects.create(self.log)
        logs = Log.objects.count()
        self.assertEquals(logs, 1)
