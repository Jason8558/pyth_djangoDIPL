from django.urls import path
from . import views

urlpatterns = [
    path('', views.tabels, name='tabels_url'),
    path('new/', views.new_tabel, name='new_tabel_url'),
    path('create/<int:id>', views.tabel_create, name='tabel_create_url'),
    path('additem/<int:id>', views.tabel_additem, name='tabel_addItem_url')

     ]
