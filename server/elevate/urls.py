from django.urls import path
from . import views

urlpatterns = [
    path('',views.start_interview, name='start_interview'),
    path('ask/',views.send_request, name='send_request')
]


