import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


{
path:"article",
component:ArticleComponent
},
{
  path: "**",
  component: NotFoundPageComponent // 萬用路徑，路由沒有比對到，永遠會執行
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
