import csv
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

from django.http import HttpResponse
from django.views import View
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

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
    
class ExportCSVView(View):
    def get(self, request, *args, **kwargs):
        data = Member.objects.all() 

        response = HttpResponse(content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="members_data.csv"'

        writer = csv.writer(response)
        writer.writerow(['Member ID', 'Name', 'Gender', 'Year of Birth', 'Phone Number', 'Email Address', 'Country', 'County', 'Sub County'])

        for row in data:
            writer.writerow([row.member_id, row.name, row.gender, row.year_of_birth, row.phone_number, row.email_address,
                             row.country, row.county, row.sub_county]) 

        return response

@csrf_exempt
@require_POST
def send_email_to_members(request):
    try:
        member_emails = Member.objects.values_list('email_address', flat=True)

        subject = request.POST.get('subject', '')
        message = request.POST.get('message', '')

        for email in member_emails:
            send_mail(subject, message, 'ciscoplayroom@gmail.com', [email], fail_silently=False)

        return JsonResponse({'success': True, 'message': 'Emails sent successfully to members'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})
