from django.urls import path
from .views import api_list_appointment, api_list_technician, api_show_appointment, api_history


urlpatterns = [
    path('technician/', api_list_technician, name="api_technician"),
    path('appointment/', api_list_appointment, name="api_appointment"),
    path('appointment/<int:pk>/', api_show_appointment, name="api_show_appointment"),
    path('history/', api_history, name="api_history"),
]
