# Create your views here.
from studentData.models import Data  # 引入我們的資料結構
from studentData.serializers import DataSerializer  # 引入 我們的資料串流結構

from rest_framework import viewsets  # 比原views 更新的東西


# Create your views here.
#ModelViewset 已經含有 CRUD 的function 在裡面

class DataViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()  # 我們model的結構的所有東西 
    serializer_class = DataSerializer  # 引入我們序列化的class


#