import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private appService: LoginService ) { }
  account_lists:any=[];
  user_name:string="";
  passwords:string="";
  input_user_name:string='';
  input_passwords:string='';
  message:string="";
  bool:number=0;
  p_router:string="";
  welcome_message:string="";

  ngOnInit(): void {
    this.getAccount()



  }
  getAccount() {
    this.appService.getAccountData().subscribe((res) => {

      for(let i=0;i<res.length;i++){
        this.account_lists.push(res[i]) ;
        //console.log("所有帳號密碼",this.account_lists[i])
      }


    });
  }

  reset() {
    this.user_name = '';
    this.passwords = '';

  }

  insertData(user_name: string, passwords: string) {
    console.log('新增使用者帳號中');
    console.log("輸入內容",user_name,passwords)

    this.appService
      .insertData({
        user_name:user_name,
        password:passwords
      })
      .subscribe((res) => {
        this.reset();
        this.getAccount()
        this.input_user_name="";
        this.input_passwords="";
      });
  }

  check(user_name: string, passwords: string){
    console.log("輸入內容",user_name,passwords)

    for(let i=0 ;i<this.account_lists.length;i++){
      if(user_name==this.account_lists[i].user_name){
        if(passwords==this.account_lists[i].password){
          this.bool=1
          break;
        }

      }
    }
    if(this.bool==1){
      this.message="歡迎 "+user_name+" 成功登入！"
      this.welcome_message="歡迎! "+user_name+" 使用實習生日誌管理系統！請按下方按鈕進入管理畫面！"
      this.p_router="/fillPage"
      this.bool=0
    }
    else{
      this.message="帳號密碼輸入錯誤!請重新輸入!"
    }



    this.input_user_name="";
    this.input_passwords="";

  }
  myFunction() {
    alert(this.message);
  }

  successful_insert(){
    alert("註冊成功！請重新登入");
  }


}
