from django.urls import path, include

from .product.views.requests import GetOrCreate, GetEditOrRemove, Activate, Deactivate
from .price_info.views.requests import CreateOrUpdate

urlpatterns = [
    path('', include('products.product.views.urls')),
    path('<int:pk>/price_info/', include('products.price_info.views.urls')),
    path('<int:pk>/specs/', include('products.spec.views.urls')),
    path('<int:pk>/images/', include('products.image.views.urls')),
    path('<int:pk>/stock/', include('products.stock.views.urls'))
]
