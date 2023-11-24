from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Member, AdminProfile

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

class AdminProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    phone_number = serializers.CharField()

    class Meta:
        model = AdminProfile
        fields = ['user', 'phone_number']

    def create(self, validated_data):
        print(validated_data)  # Print the received data
        user_data = validated_data.pop('user')
        password = user_data.pop('password')
        
        # Create the user instance
        user = User.objects.create_user(password=password, **user_data)

        # Create the AdminProfile instance
        admin_profile = AdminProfile.objects.create(user=user, phone_number=validated_data['phone_number'])

        return admin_profile

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user_data = representation.pop('user')
        representation.update(user_data)
        return representation