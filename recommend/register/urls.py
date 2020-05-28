from django.urls import path,re_path
from . import views;


urlpatterns=[

    path('',views.register),
    path('check/',views.check),
    path('confirm/',views.confirm),
    re_path(r'^verify/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.verify, name='activate'),
]
