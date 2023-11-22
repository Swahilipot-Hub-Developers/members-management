from django.urls import path, include
from .views import MemberListAPIView, MemberDetailAPIView, ExportCSVView

urlpatterns = [
    path('members/', MemberListAPIView.as_view(), name='member-list'),
    path('members/<str:member_id>/', MemberDetailAPIView.as_view(), name='member-detail'),
    path('export-csv/', ExportCSVView.as_view(), name='export_csv'),
]
