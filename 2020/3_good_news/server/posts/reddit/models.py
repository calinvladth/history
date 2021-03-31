from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db import models, transaction

from .api import Reddit


class PostsManager(models.Manager):

    @staticmethod
    def create_all(posts):

        before_count = Posts.objects.count()
        failed_count = 0

        for o in posts:
            with transaction.atomic():
                try:
                    Posts.objects.create(
                        id=o.id,
                        author=o.author,
                        title=o.title,
                        media=o.media,
                        preview=o.preview.get('images')[0] if hasattr(o, 'preview') else None,
                        flair=o.link_flair_text,
                        is_self=o.is_self,
                        over_18=o.over_18,
                        subreddit=o.subreddit,
                        score=o.score,
                        created=o.created,
                        created_utc=o.created_utc,
                        url=o.url,
                        thumbnail=o.thumbnail,
                        permalink=Reddit().api + o.permalink
                    )
                except:
                    failed_count = failed_count + 1

        after_count = Posts.objects.count()
        created_count = after_count - before_count

        return created_count, failed_count

    def pagination(self, page=1, limit=25, newest=True, **filters):
        posts = Posts.objects.filter(**filters).order_by('-created_utc' if newest else 'created_utc')
        paginator = Paginator(posts, limit)

        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        # return data, paginator
        return data, paginator


class Posts(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    author = models.CharField(max_length=100)
    title = models.TextField(unique=True)
    media = models.TextField(null=True, blank=True)
    preview = models.TextField(null=True, blank=True)
    flair = models.CharField(max_length=100, null=True, blank=True)
    is_self = models.BooleanField()
    over_18 = models.BooleanField()
    subreddit = models.CharField(max_length=255)
    score = models.PositiveIntegerField(default=0)
    created = models.CharField(max_length=100)
    created_utc = models.CharField(max_length=100, default='-')
    url = models.URLField()
    permalink = models.URLField()
    thumbnail = models.URLField()

    objects = PostsManager()
