from django.shortcuts import render
from django.http import HttpResponse
from .models import *

# Create your views here.
def first(request):
    return render(request,'index.html')
def arghya(request):
    return render(request,'index1.html')