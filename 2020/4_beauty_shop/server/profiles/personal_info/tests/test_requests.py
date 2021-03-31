from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import Account
from base.testing.data import account, personal_info


class TestPersonalInfoRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.account = Account.objects.create(**account)
        token, _ = Token.objects.get_or_create(user=self.account)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

    def test_get_or_create(self):
        response = self.client.get('/profile/personal_info/')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(self.account.id, response.data['data']['account'])

    def test_update(self):
        response = self.client.put('/profile/personal_info/', data=personal_info, format='json')
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertTrue(response.data['success'])
        self.assertEqual(personal_info['username'], response.data['data']['username'])
