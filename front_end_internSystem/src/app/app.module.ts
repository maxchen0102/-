import { ArticleComponent } from './article/article.component';
import { ArticleModule } from './article/article.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    ArticleComponent, // This is for selector tag  working

    BannerComponent,

    NotFoundPageComponent,
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ArticleModule, // This is for article module working

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  exports: [
    FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
