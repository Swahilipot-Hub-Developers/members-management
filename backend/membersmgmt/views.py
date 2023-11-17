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

    def post(self, request):
        data = request.data

        name = data.get('name', '')
        gender = data.get('gender', '')
        year_of_birth = data.get('year_of_birth', '')
        email_address = data.get('email_address', '')
        country = data.get('country', '')
        county = data.get('county', '')
        sub_county = data.get('sub_county', '')
        phone_number = data.get('phone_number', '')
        #password = data.get('password', '')

        member = Member.objects.create(
            name=name,
            gender=gender,
            year_of_birth=year_of_birth,
            email_address=email_address,
            country=country,
            county=county,
            sub_county=sub_county,
            phone_number=phone_number,
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
