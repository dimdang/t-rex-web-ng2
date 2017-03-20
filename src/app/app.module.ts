import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import {HeaderComponent} from './common-shared/header.component';
import {WhoWeAreComponent} from './who-we-are/who-we.component';
import {Sub1Component} from './footer/sub-footer-1/sub1.component';
import {Sub2Component} from './footer/sub-footer-2/sub2.component';
import {Sub3Component} from './footer/sub-footer-3/sub3.component';
import {AuthorComponent} from './author/author.component';
import {BookComponent} from './book/book.component';
/*home*/
import {FeatureComponent} from './home/feature/feature.component';
import {ReleaseComponent} from './home/new-release/release.component';
/*who we are*/
import {WhoComponent} from './who-we-are/who/who.component';
import {CoolComponent} from './who-we-are/cool/cool.component';
/*api*/
import {ApiComponent} from './api/api.component';

import { RegisterComponent } from './register/register.component';
import {DashboardHomeComponent} from './dashboard/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    WhoWeAreComponent,
    AuthorComponent,
    BookComponent,
    HomeComponent,
    FeatureComponent,
    ReleaseComponent,
    WhoComponent,
    CoolComponent,
    ApiComponent,
    RegisterComponent,
    DashboardHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component :HomeComponent,
        children: [
          { path: '', redirectTo: 'feature', pathMatch: 'full' },
          { path: 'feature', component: FeatureComponent },
          { path: 'new-release', component: ReleaseComponent }
        ]
      },
      {path: 'who-we-are', component :WhoWeAreComponent,
        children: [
          { path: '', redirectTo: 'who', pathMatch: 'full' },
          { path: 'who', component: WhoComponent },
          { path: 'cool', component: CoolComponent }
        ]
      },
      {path: 'author', component :AuthorComponent},
      {path: 'book', component :BookComponent},

      {path: 'register', component :RegisterComponent},
      {path: 'dashboard', component :DashboardHomeComponent},
      { path: '**', redirectTo: 'home' },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
