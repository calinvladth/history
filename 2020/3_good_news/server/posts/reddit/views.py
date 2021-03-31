from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .api import Reddit
from .serializer import PostsSerializer
from ..models import Posts

from rest_framework.permissions import IsAdminUser, BasePermission, SAFE_METHODS

from ..logs.models import Log
import threading
import time


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS


class RedditView(APIView):
    permission_classes = [IsAdminUser | ReadOnly]

    def __init__(self):
        self.reddit = Reddit()

    def get(self, request):
        page, newest, filters = self.get_filters(request)

        posts, paginator = Posts.objects.pagination(page=page, newest=newest, **filters)
        posts_serializer = PostsSerializer(posts, many=True)

        return Response({
            'success': True,
            'message': 'Posts fetched successfully',
            'total_posts': paginator.count,
            'pagination': {
                'next_page': posts.has_next(),
                'previous_page': posts.has_previous(),
                'total_pages': paginator.num_pages,
                'current_page': posts.number,
            },
            "filters": filters,
            "order_by_newest": newest,
            'data': posts_serializer.data
        }, status=status.HTTP_200_OK)

    def post(self, request):
        # Admin role required
        if request.data.get('days'):
            self.reddit.set_defaults(days=request.data.get('days'))

        start_time = time.time()

        background_task = threading.Thread(target=self.db_populate, args=[request.user])
        background_task.setDaemon(False)
        background_task.start()

        return Response({
            'success': True,
            'message': 'Posts will be updates in a few minutes',
            'load_time': f'{time.time() - start_time}s'
        })

    def db_populate(self, user):
        posts = self.reddit.get_subreddit()
        created, failed = Posts.objects.create_all(posts)

        # LOG
        log = {
            'created_posts': created,
            'admin': user,
            'days': self.reddit.days,
            'subreddits': self.reddit.subreddits,
            'failed_posts': failed,
            'total_posts': posts.__len__(),
            'status': status.HTTP_200_OK
        }

        Log.objects.create(log)

        return

    @staticmethod
    def get_filters(request):
        page = request.GET.get('page') or 1
        newest = True
        filters = {}

        if request.GET.get('newest'):
            newest = True if request.GET.get('newest') == '1' else False
        if request.GET.get('title'):
            filters['title__contains'] = request.GET.get('title')

        return page, newest, filters
