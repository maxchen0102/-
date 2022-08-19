import { Component, OnInit } from '@angular/core';
// 注入 WriteArticleService 到compoennt
import { WriteArticleService } from './write-article.service';


@Component({
  selector: 'app-write-article',
  templateUrl: './write-article.component.html',
  styleUrls: ['./write-article.component.css']
})
export class WriteArticleComponent implements OnInit {

  constructor(private appService: WriteArticleService) { }
  lists: any;
  name = '';
  email = '';
  phone = '';
  id = 0;

  selectedOptions: any; //select 選單的id
  article:string="";


  //initiate before the class initiate
  ngOnInit(): void {
    this.getAllData();

  }
  //取得所有資料
  // subscribe observor ，從service 拿資料 放到list 裡面
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
 mySelect(value:number){

    console.log(value)
  }



  public onValueChanged(passValue: any): void {
    this.selectedOptions = passValue;
    console.log(this.selectedOptions); // should display the selected option.
  }

  showArticle(){

    console.log(this.article);
    this.article="";
    console.log(this.article);
    console.log('新增文章完成');


  }

  insertArticle(){

    console.log(this.selectedOptions);

    console.log(this.article);


    this.appService
    .insertArticle({
      Original_id: this.selectedOptions,
      article:this.article
    })

    console.log('新增文章完成');
    this.article="";
  }


}
