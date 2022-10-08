###### tags: `github專案ReadMD`
# 這是我的實習生管理系統
[TOC]

## 啟動步驟3個事先設定

### 更改CORS設定
1. 把兩個檔案前後端打開 並各自啟動
2. 前端(fronte-end)使用 `ng serve` 後端(back_end)使用 `python manage.py runserver` 記得要到各自的檔案中啟動才能。
3. 啟動之後 會發現前端吃不到畫面，因為有ＣORＳ問題 ，
4. 這時去後端back_end檔案中的 的setting 文件 ，如下圖，並到setting 檔案的最下面行136和142去改成我們前端的port網址(剛剛前端啟動後會告訴你目前上限的網址)， 這樣就可以成功執行了。
![](https://i.imgur.com/tvgloLs.png)


### 更改mysql 資料庫設定 

一樣到後端的setting 檔案 更改87行的DATABASES設定，那個是mysql的連線設定，你要連線到你的mysql，他會有一組連線字串，至於詳細的欄位怎麼填，可以參考網上的mysql連線字串教學，一定寫得比小弟完善，當然你也可以使用其他的資料庫，但是不影響本專題的使用，只要在開始前從新migrate 一次資料庫就好。

![](https://i.imgur.com/KbhMEcn.png)

### 從新migrate 資料庫

這個步驟是從新在你自己的資料庫，寫入相對應的欄位還有表格，非常重要！！

這個步驟一樣到後端back_end資料夾下位置的終端機執行，記得把註解去掉><，可以直接複製使用。

```shell
python manage.py makemigrations studentData//會產生表格讓你檢視 確認資料庫欄位變更 和記錄變更(0001）

python manage.py migrate studentData  //真正migrate 到資料庫
```

## 功能簡介 


![](https://i.imgur.com/x2F6ubW.png)

![](https://i.imgur.com/IrXv88y.png)

![](https://i.imgur.com/oEQ5ZOz.png)

![](https://i.imgur.com/89jh4dN.png)

![](https://i.imgur.com/G65XXTF.png)

