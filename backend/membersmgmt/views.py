from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from captcha.decorators import validate_recaptcha

from .models import Member, AdminProfile
from .serializers import MemberSerializer, AdminProfileSerializer

class MemberListAPIView(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)
    
    #Submitting the Members form to the database
    def post(self, request):
        data = request.data

        # Confirming all keys are filled before submission
        if not all(key in data for key in ['name', 'gender', 'year_of_birth', 'email_address', 'country', 'county', 'sub_county', 'phone_number']):
            return Response({'error': 'Required fields are missing'}, status=status.HTTP_400_BAD_REQUEST)

        recaptcha_value = request.recaptcha_response

        member = Member.objects.create(
            name=data['name'],
            gender=data['gender'],
            year_of_birth=data['year_of_birth'],
            email_address=data['email_address'],
            country=data['country'],
            county=data['county'],
            sub_county=data['sub_county'],
            phone_number=data['phone_number'],
        )

        return Response({'message': 'Data received successfully'}, status=status.HTTP_201_CREATED)

class MemberDetailAPIView(APIView):
    def get(self, request, member_id):
        member = Member.objects.get(pk=member_id)
        serializer = MemberSerializer(member)
        return Response(serializer.data)

    def put(self, request, member_id):
        member = Member.objects.get(pk=member_id)
        serializer = MemberSerializer(member, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, member_id):
        member = Member.objects.get(pk=member_id)
        member.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class AdminProfileListCreateView(generics.ListCreateAPIView):
    queryset = AdminProfile.objects.all()
    serializer_class = AdminProfileSerializer

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

    def get_queryset(self):
        user = self.request.user
        return AdminProfile.objects.filter(user=user)