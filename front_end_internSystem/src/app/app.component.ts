import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators, FormControl,  ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service'; //注入servive

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //component 建立的時候 會自動建立 appService（為Appservice為模型ㄊ）
  constructor(private appService: AppService) {}
  //定義我們要傳去html的容器ß
  lists: any;
  name = '';
  email = '';
  phone = '';
  id = 0;

  //initiate before the class initiate
  ngOnInit(): void {
    this.getAllData();
  }
  //取得所有資料
  // subscribe observor ，從service 拿資料
  getAllData() {
    this.appService.getMainData().subscribe((res) => {
      console.log('InComponent', res);
      this.lists = res;
    });
  }

  reset() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.id=0;
  }

  //新增一筆資料
  insertData(name: string, email: string, phone: string) {
    console.log('新增資料中');
    this.appService
      .insertData({
        name: name,
        email: email,
        phone:phone,
      })
      .subscribe((res) => {
        this.getAllData();
        this.reset();
      });
  }

  //更新一筆資料
  editData(name: string, email: string, phone: string) {
    console.log('更新中');
    this.appService.updateData(
      {
        name: this.name,
        email: this.email,
        phone: this.phone,
      },
      this.id
    ).subscribe(()=>{
      this.getAllData()//更新修改夠的資料到網頁上
      this.reset()
    });
  }

  //刪除一筆資料
  deleteData(id: number) {
    console.log('刪除資料中');
    return this.appService.deleteData(id).subscribe((res) => {
      console.log(res);
      this.getAllData();
    });
  }

  showData(id: number, name: string, email: string, phone: string) {
    console.log('顯示資料中');
    console.log(id); //從列表中取得id 然後回傳

    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
