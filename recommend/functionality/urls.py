from django.urls import path,include
from . import views

urlpatterns = [
    path('music/',views.music),
    path('books/',views.books),
    path('movies/',views.movies),

]
