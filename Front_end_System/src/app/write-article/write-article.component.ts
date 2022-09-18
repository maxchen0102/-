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
  month:any;
  day:any;
  year:any;
  year_list=[2020,2021,2022,2023,2024]
  month_lists=[1,2,3,4,5,6,7,8,9,10,11,12]
  day_list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  selectedOptions: any; //select 選單的id
  article:string="";
  caption:string="";


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



  public year_change(yearValue: any): void {
    this.year = yearValue;
    console.log(this.year); // should display the selected option.
  }



  public month_change(monthValue: any): void {
    this.month = monthValue;
    console.log(this.month); // should display the selected option.
  }

  public day_change(day: any): void {
    this.day = day;
    console.log(this.day); // should display the selected option.
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

    console.log("標題:",this.caption,"文章:",this.article,"年：",this.year,"月:",this.month,"日:",this.day);

    this.appService
    .insertArticle({
      Original_id: this.selectedOptions,
      article:this.article,
      caption:this.caption,
      year:this.year,
      month:this.month,
      day:this.day

    }).subscribe((res) => {
      this.getAllData();
      this.reset();
    });

    console.log('新增文章完成');
    this.article="";
  }


}
