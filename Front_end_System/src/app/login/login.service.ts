import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { accountModel } from './account_model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  secondURL='http://127.0.0.1:8000/api/account/';
  options: any;

  constructor( private http: HttpClient ) {

    this.http.get(this.secondURL).subscribe((res) => {});
    this.options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }
  getAccountData(): Observable<accountModel[]> {
    return this.http.get<accountModel[]>(this.secondURL); //why post ?
  }
  insertData(request: accountModel) {
    return this.http.post(
      this.secondURL,
      request, // 我們給後端的request
      this.options
    );
  }

}
