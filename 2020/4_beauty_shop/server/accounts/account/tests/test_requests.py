from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token
from base.testing.data import account

from accounts.models import Account
from .data import account
from .data import super_account


class TestAccountRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.account = Account.objects.create(**account)
        token, _ = Token.objects.get_or_create(user=self.account)
        # self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

    def test_register_client(self):
        data = {
            'email': 'calinvlad.t@gmail.com',
            'password': 'Pwd1q2w3e'
        }
        response = self.client.post(f'/account/register/', data=data,
                                    format='json')

        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertEqual(data['email'], response.data['data']['email'])

    # def test_register_admin(self):
    #     self.client.post(f'/account/login/', data=super_account,
    #                      content_type='application/json')
    #
    #     account['is_staff'] = True
    #     response = self.client.post(f'/account/{self.superuser.id}/register/', data=account,
    #                                 content_type='application/json')
    #     self.assertTrue(response.data['data']['is_admin'])
    #     self.assertTrue(response.data['data']['is_staff'])

    def test_login(self):
        response = self.client.post(f'/account/login/', data=account,
                                    format='json')

        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(account['email'], response.data['data']['email'])

    def test_check_account(self):
        response = self.client.get('/account/check_account/')
        print('RESP: ', response.data)
        self.assertTrue(status.HTTP_200_OK, response.status_code)
        self.assertTrue(account['email'], response.data['data']['email'])
