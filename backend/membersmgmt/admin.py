from django.contrib import admin
from .models import Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('member_id', 'name', 'gender', 'year_of_birth', 'phone_number', 'email_address', 'country', 'county', 'sub_county')
    search_fields = ('member_id', 'name', 'gender', 'year_of_birth', 'phone_number', 'email_address', 'country', 'county', 'sub_county')

