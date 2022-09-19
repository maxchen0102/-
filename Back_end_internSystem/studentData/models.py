from django.db import models

#從python 引入model 


# Create your models here.
class Data(models.Model):
    name = models.TextField()
    email = models.TextField()
    phone = models.TextField()
    
    class Meta:
        db_table = "data" # 你資料表的名稱 
        


class Article_2(models.Model):
    Original_id=models.DecimalField (max_digits=10,decimal_places=0)
    article=models.TextField(default="Empty")
    caption=models.TextField(default="Empty")
    year=models.TextField(default="Empty")
    month=models.TextField(default="Empty")
    day=models.TextField(default="Empty")
    
    class Meta:
            db_table = "article_2" # 你資料表的名稱 
            
class Article_3(models.Model):
    Original_id=models.DecimalField (max_digits=10,decimal_places=0)
    article=models.TextField(default="Empty")
    caption=models.TextField(default="Empty")
    year=models.TextField(default="Empty")
    month=models.TextField(default="Empty")
    day=models.TextField(default="Empty")
    
    class Meta:
            db_table = "article_3" # 你資料表的名稱 
            

class Account(models.Model):
    user_name=models.TextField(default="Empty")
    password=models.TextField(default="Empty")
    class Meta:
            db_table = "Account" 
    
    
        
        