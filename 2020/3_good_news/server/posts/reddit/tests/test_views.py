from django.test import TestCase, Client
from ..views import PostsView

from django.urls import reverse


class TestRedditViews(TestCase):
    def setUp(self):
        # self.client = Client()
        pass

    def test_bulk_create(self):
        pass
        # response = self.client.post(reverse('posts'))
        # self.assertEquals(response.data['success'], True)

    def test_get_posts(self):
        pass
        # response = self.client.get(reverse('posts'))
        # self.assertEquals(response.data['success'], True)
