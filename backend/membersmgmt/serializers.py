from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Member, AdminProfile

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class AdminProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminProfile
        fields = ('user', 'phone_number')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['username'] = instance.user.username
        representation['email'] = instance.user.email
        representation['first_name'] = instance.user.first_name
        representation['last_name'] = instance.user.last_name
        return representation