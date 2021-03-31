from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from base.testing.data import account, address
from accounts.models import Account
from rest_framework.authtoken.models import Token
from profiles.models import Address


class TestAddressRequests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.account = Account.objects.create(**account)
        token, _ = Token.objects.get_or_create(user=self.account)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)

    def test_get_all(self):
        response = self.client.get('/profile/address/')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_get_by_pk(self):
        obj = Address.objects.create_address(account=self.account, **address)
        response = self.client.get(f'/profile/address/{obj.pk}/')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_200_OK, response.status_code)

    def test_create(self):
        response = self.client.post('/profile/address/', data=address, format='json')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertTrue(response.data['data']['default'])

    def test_create_second(self):
        Address.objects.create_address(account=self.account, **address)
        response = self.client.post('/profile/address/', data=address, format='json')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_201_CREATED, response.status_code)
        self.assertFalse(response.data['data']['default'])

    def test_update(self):
        obj = Address.objects.create_address(account=self.account, **address)
        data = address
        data['first_name'] = 'Theodor'
        response = self.client.put(f'/profile/address/{obj.pk}/', data=data, format='json')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertEqual(data['first_name'], response.data['data']['first_name'])

    def test_delete_default(self):
        obj = Address.objects.create_address(account=self.account, **address)
        response = self.client.delete(f'/profile/address/{obj.pk}/')
        self.assertEqual("""The default address can't be removed""", response.data['message'])

    def test_delete(self):
        Address.objects.create_address(account=self.account, **address)
        obj = Address.objects.create_address(account=self.account, **address)
        response = self.client.delete(f'/profile/address/{obj.pk}/')
        self.assertTrue(response.data['success'])
        self.assertEqual(status.HTTP_204_NO_CONTENT, response.status_code)
        self.assertFalse(response.data['data']['id'])
