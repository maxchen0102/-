import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';
// 注入 WriteArticleService 到compoennt


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private appService: ArticleService) { }
  lists: any;
  name = '';
  email = '';
  phone = '';
  id = 0;

  selectedOptions: any; //select 選單的id
  article:string="";

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

  onValueChanged(passValue: any): void {
    this.selectedOptions = passValue;

    console.log(this.selectedOptions); // should display the selected option.
  }


}
