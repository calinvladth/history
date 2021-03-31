from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/posts/', include('posts.urls')),
    path('api/account/', include('account.urls'))
]

urlpatterns += staticfiles_urlpatterns()
