from django.urls import path, include
from .views import MemberListAPIView, MemberDetailAPIView, \
    ExportCSVView, SendEmailToMembersView, AdminRegistrationAPIView, login_view, \
    send_sms, send_sms_with_twilio

urlpatterns = [
    path('members/', MemberListAPIView.as_view(), name='member-list'),
    path('members/<str:member_id>/', MemberDetailAPIView.as_view(), name='member-detail'),
    path('export-csv/', ExportCSVView.as_view(), name='export_csv'),
    path('send-email-to-members/', SendEmailToMembersView.as_view(), name='send_email_to_members'),
    path('admin-registration/', AdminRegistrationAPIView.as_view(), name='admin-registration'),
    path('login/', login_view, name='api_login'),
    path('send_sms/', send_sms, name='send-sms'),
    path('send_sms_with_twilio', send_sms_with_twilio, name="send-sms-with-twilio")
]
