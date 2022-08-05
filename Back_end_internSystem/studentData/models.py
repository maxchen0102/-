from django.db import models

#從python 引入model 


# Create your models here.
class Data(models.Model):
    name = models.TextField()
    email = models.TextField()

    phone = models.TextField()
    
    class Meta:
        db_table = "data" # 你資料表的名稱 
        
    
    