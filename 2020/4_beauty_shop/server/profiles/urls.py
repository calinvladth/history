from django.urls import path, include

urlpatterns = [
    path('personal_info/', include('profiles.personal_info.views.urls')),
    path('wish_list/', include('profiles.wish_list.views.urls')),
    path('cart/', include('profiles.cart.views.urls')),
    path('reviews/', include('profiles.review.views.urls')),
    path('address/', include('profiles.address.views.urls'))
]
