from django.conf import settings
from django.contrib import admin
from django.urls import path, include

if settings.ADMIN_ENABLED:
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('api/auth/', include('my_account.urls')),
        path('api/', include('wallet.urls'))
    ]
else:
    urlpatterns = [
        path('api/auth/', include('my_account.urls')),
        path('api/', include('wallet.urls'))
    ]
