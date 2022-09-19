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
  article_lists:any;
  spe_aticle_list:any=[]
  spe_caption_list:any=[]
  tem_article_list:any=[]
  day_list:any=[]
  day:string=""

  name = '';
  email = '';
  phone = '';
  id :any;
  article_number:number=0;


  selectedOptions: any; //select 選單的id
  article:string="";
  choose_article:string="";

  ngOnInit(): void { //這是程式仔入就會直接執行
    this.getAllData();
  }

  //取得所有資料
  // subscribe observor ，從service 拿資料 放到list 裡面
  getAllData() {
    this.appService.getMainData().subscribe((res) => {
      console.log('目前名單', res);
      this.lists = res;

    });
  }


  onValueChanged(passValue: any): void {
    this.selectedOptions = passValue;
    console.log("目前選擇的人的id",this.selectedOptions); // should display the selected option.
    this.getAllArticle() //因為監聽select list  後的執行下面的function
  }

  getAllArticle() {
    this.appService.gerArticle2().subscribe((res) => {

      this.article_lists = res;
      console.log("所有文章數量:",this.article_lists.length)
       for(let i=0 ;i<this.article_lists.length;i++){

        if(this.article_lists[i].Original_id==this.selectedOptions){
          this.spe_aticle_list.push(this.article_lists[i].article);
          this.spe_caption_list.push(this.article_lists[i].caption);
          this.day=this.article_lists[i].year+"年"+this.article_lists[i].month+"月"+this.article_lists[i].day+"日"
          //console.log("此人的第一篇標題發文時間:",this.day);
          this.day_list.push(this.day)
          this.day=""
          //console.log("刪除後的時間:",this.day);

          //console.log("此人的第一篇標題:",this.spe_caption_list[0]);
          //console.log("此人的第一篇文章:",this.spe_aticle_list[0]);

        }

      }
      console.log("此人的文章數量:",this.spe_aticle_list.length);
      this.article_number=this.spe_aticle_list.length; // 統計此人文章



    });
    this.spe_aticle_list=[] //要去做清除動作== 否則有bug
    this.spe_caption_list=[]
    this.article_lists=[]
  }


  button_test(article:any){
    this.choose_article=article
    console.log("button ok ",this.choose_article)
  }




}
