import { WriteArticleComponent } from './write-article/write-article.component';
import { FillPageComponent } from './fill-page/fill-page.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"article",
    component:ArticleComponent
  },
  {
    path :"writeArticle",
    component:WriteArticleComponent
  },

  {
    path:"fillPage",
    component:FillPageComponent,

  },
  {
    path:"login",
    component:LoginComponent

  },
  {
    path:"**",
    component:NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
