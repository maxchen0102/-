import { FillPageModule } from './fill-page/fill-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { FillPageComponent } from './fill-page/fill-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    ArticleComponent,
    LoginComponent,
    FillPageComponent,
    NavBarComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FillPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
