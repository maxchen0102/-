# Create your views here.
from studentData.models import  Data ,Article_2 # 引入我們的資料結構
from studentData.serializers import DataSerializer ,Article2Serializer # 引入 我們的資料串流結構
from django.http import HttpResponse, JsonResponse,request
from rest_framework import viewsets  # 比原views 更新的東西
from rest_framework.response import Response
from rest_framework.views import APIView
from decimal import *


# Create your views here.
#ModelViewset 已經含有 CRUD 的function 在裡面

class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()  # 我們model的結構的所有東西 
    serializer_class = DataSerializer  # 引入我們序列化的class


class Article2ViewSet(viewsets.ModelViewSet):
    
    queryset = Article_2.objects.all()# 我們model的結構的所有東西 
    serializer_class = Article2Serializer  # 引入我們序列化的class



