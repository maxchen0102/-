import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataModel } from './data_model';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FillPageService {
  mainURL = environment.apiURL;
  options: any;

  private data_list: dataModel[] = [];
  public nameVariable: any = {};
  public msgArray: any = [];
  public New_Data: any = '';
  constructor(private http: HttpClient) {
    this.http.get(this.mainURL).subscribe((res) => {});

    //why ??
    this.options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  //乾＝＝ http function 就自帶CRUD method 只要call來用就好了==

  //取得所有資料
  //1. 串接戶端API網址
  //2.用http.get 取得資料
  //3. 定義為dataModel資料型態
  //4. 包成function 給component 呼叫
  getMainData(): Observable<dataModel[]> {
    return this.http.get<dataModel[]>(this.mainURL); //why post ?
  }

  //*新增一筆資料
  //why is request
  //呼叫此函式 會發送post
  insertData(request: dataModel) {
    return this.http.post(
      this.mainURL,
      request,
      this.options
    );
  }

  //更新一筆資料
  //update 在component 呼叫的時候要有兩個傳值， 一個是datamodel型態的修改後資料 以及修改值id
  updateData(request: dataModel, id: number) {
    return this.http.put(`http://127.0.0.1:8000/api/data/${id}/`,request , this.options);
  }

  //刪除一筆資料
  deleteData(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/data/${id}/`, this.options);
  }

}
