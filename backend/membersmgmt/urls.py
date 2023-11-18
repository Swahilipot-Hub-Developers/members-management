from django.urls import path, include
from .views import MemberListAPIView, MemberDetailAPIView

urlpatterns = [
    path('members/', MemberListAPIView.as_view(), name='member-list'),
    path('members/<str:member_id>/', MemberDetailAPIView.as_view(), name='member-detail'),
]
