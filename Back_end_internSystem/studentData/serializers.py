from rest_framework import serializers

from studentData.models import Data # 引入你model裡面的class 


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        # fields = '__all__'
        fields = ('id', 'name', 'email', 'phone') ## 定義你的資料流

