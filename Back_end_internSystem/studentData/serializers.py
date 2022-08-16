from rest_framework import serializers

from studentData.models import Data # 引入你model裡面的class 

# 再來我們來定義序列化器。這個目的是把你的資料庫中設定的欄位，轉換成可以傳輸的模式
class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        # fields = '__all__'
        fields = ('id', 'name', 'email', 'phone') ## 定義你的資料流


