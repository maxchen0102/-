import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataModel } from './data_model';
import { environment } from 'src/environments/environment.prod';

import { Observable } from 'rxjs';
import { articleModel } from './article_model';

@Injectable({
  providedIn: 'root'
})
export class WriteArticleService {
  mainURL = environment.apiURL;
  minorURL=environment.articleURL
  options: any;

  private data_list: dataModel[] = [];
  public nameVariable: any = {};
  public msgArray: any = [];
  public New_Data: any = '';

  constructor(private http: HttpClient) {
       //******Subscribing to an observable is equivalent to adding an event listener*******
       this.http.get(this.mainURL).subscribe((res) => {});

       //why ?? options object that is used to configure the request.
       // we define the content type must be json form
       //https://angular.io/guide/http
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




  //8************************Article Part ****************************************
  insertArticle(request: articleModel) { // 參數就寫在interface了啊 就是articleModel
    return this.http.post(
      this.minorURL,
      request, // 我們給後端的request
      this.options
    );
  }
}
