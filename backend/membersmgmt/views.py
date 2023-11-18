from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

from .models import Member, Admin
from .serializers import MemberSerializer, AdminSerializer

class MemberListAPIView(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)
    
    #Submitting the Members form to the database
    def post(self, request):
        data = request.data

        if not all(key in data for key in ['name', 'gender', 'year_of_birth', 'email_address', 'country', 'county', 'sub_county', 'phone_number']):
            return Response({'error': 'Required fields are missing'}, status=status.HTTP_400_BAD_REQUEST)

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

class AdminViewSet(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
