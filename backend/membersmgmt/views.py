from django.shortcuts import render
from django.contrib.auth import login, authenticate, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.middleware.csrf import get_token

@csrf_exempt
def register(request):
    if request.method == 'POST':
        # Handle registration logic
        return JsonResponse({'message': 'User registered successfully'})
