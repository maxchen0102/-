from django.db import models

#從python 引入model 


# Create your models here.
class Data(models.Model):
    name = models.TextField()
    email = models.TextField()

    phone = models.TextField()
    
    class Meta:
        db_table = "data" # 你資料表的名稱 
        

class Article(models.Model):
    Original_id=models.DecimalField (max_digits=5, decimal_places=2)
    article=models.TextField()
    
    class Meta:
            db_table = "article" # 你資料表的名稱 
        
class Article_2(models.Model):
    Original_id=models.DecimalField (max_digits=5, decimal_places=2)
    article=models.TextField()
    
    class Meta:
            db_table = "article_2" # 你資料表的名稱 
        