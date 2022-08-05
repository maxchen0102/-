# 
# 這是我的實習生管理系統

### 啟動步驟 
1. 把兩個檔案前後端打開 並各自啟動
2. 前端使用 `ng serve` 後端使用 `python manage.py runserver`
3. 啟動之後 會發現前端吃不到畫面，因為有ＣＲＯＳ問題 ，
4. 這時去後端django 下圖的setting 文件最下面去改我們前端的port網址， 這樣就可以成功執行了
![](https://i.imgur.com/tvgloLs.png)
