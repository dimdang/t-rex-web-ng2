import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
//import {HomeComponent} from './home/home.component';
import {HomeComponent} from './common-shared/home.component';
import {WhoWeAreComponent} from './who-we-are/who-we.component';
import {Sub1Component} from './footer/sub-footer-1/sub1.component';
import {Sub2Component} from './footer/sub-footer-2/sub2.component';
import {Sub3Component} from './footer/sub-footer-3/sub3.component';
import {AuthorComponent} from './author/author.component';
import {BookComponent} from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    WhoWeAreComponent,
    AuthorComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component :HomeComponent},
      {path: 'who-we-are', component :WhoWeAreComponent},
      {path: 'author', component :AuthorComponent},
      {path: 'book', component :BookComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
