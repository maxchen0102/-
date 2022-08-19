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
export class ArticleService {

  mainURL = environment.apiURL;
  minorURL=environment.articleURL
  options: any;

  private data_list: dataModel[] = [];
  public nameVariable: any = {};
  public msgArray: any = [];
  public New_Data: any = '';

  constructor(private http: HttpClient,private http2:HttpClient) {

     this.http.get(this.mainURL).subscribe((res) => {});
     this.http2.get(this.minorURL).subscribe((res) => {}); //監聽另一個後端API

     this.options = {
       headers: new HttpHeaders({
         'content-type': 'application/json',
       }),
     };
  }

  getMainData(): Observable<dataModel[]> {
    return this.http.get<dataModel[]>(this.mainURL);
  }



}
