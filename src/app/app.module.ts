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
import { ReactiveFormsModule } from '@angular/forms';
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
import {LoginComponent} from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import { UserComponent } from './dashboard/user/user.component';
import { BooksComponent } from './dashboard/books/books.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { DashAuthorComponent } from './dashboard/author/author.component';
import { DashOrderComponent } from './dashboard/dash-order/dash-order.component';
import { BookFormComponent } from './dashboard/book-form/book-form.component';
import { CategoryFormComponent } from './dashboard/category-form/category-form.component';
import {AuthGuard} from './services/auth.guard';
import { AuthorFormComponent } from './dashboard/author-form/author-form.component';
import {ImageUploadModule} from "angular2-image-upload";
import { FilterPipe } from './dashboard/category/filter.pipe';
import {Ng2PaginationModule} from 'ng2-pagination';
import { CategoryFormUpdateComponent } from './dashboard/category-form-update/category-form-update.component';
import {HeaderService} from './services/header.service';
import { AuthorFormUpdateComponent } from './dashboard/author-form-update/author-form-update.component';
import { BookFormUpdateComponent } from './dashboard/book-form-update/book-form-update.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { OrderDetailComponent } from './dashboard/order-detail/order-detail.component';
import { BookPipe } from './dashboard/books/book.pipe';
import { AuthorPipe } from './dashboard/author/author.pipe';
import { OrderPipe } from './dashboard/dash-order/order.pipe';
import { SlidesModule } from 'ng2-slides';


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
    DashboardHomeComponent,
    LoginComponent,
    FilterComponent,
    UserComponent,
    BooksComponent,
    ContactComponent,
    ProductDetailComponent,
    CartComponent,
    PaymentComponent,
    CategoryComponent,
    DashAuthorComponent,
    DashOrderComponent,
    BookFormComponent,
    CategoryFormComponent,
    AuthorFormComponent,
    FilterPipe,
    CategoryFormUpdateComponent,
    AuthorFormUpdateComponent,
    BookFormUpdateComponent,
    MainDashboardComponent,
    OrderDetailComponent,
    BookPipe,
    AuthorPipe,
    OrderPipe,

     ],

  imports: [
    ImageUploadModule.forRoot(),
    Ng2PaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    SlidesModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'dashboard', component :DashboardHomeComponent, canActivate: [AuthGuard],
        children: [
          {path: 'user', component: UserComponent},
          {path: 'add-book', component: BookFormComponent},
          {path: 'add-author', component: AuthorFormComponent},
          {path: 'book', component: BooksComponent},
          {path: 'author', component: DashAuthorComponent},
          {path: 'category', component: CategoryComponent},
          {path: 'order', component: DashOrderComponent},
          {path: 'add-category', component: CategoryFormComponent},
          {path: 'update-category/:id', component: CategoryFormUpdateComponent},
          {path: 'update-book/:id', component: BookFormUpdateComponent},
          {path: 'update-author/:id', component: AuthorFormUpdateComponent},
          {path: 'order-detail/:id', component: OrderDetailComponent},
           {path: 'dash-home', component: MainDashboardComponent},
          { path: '**', redirectTo: 'BooksComponent'},
        ]
      },
      {path: '', component :HeaderComponent,
        children: [
          {path: 'payment', component :PaymentComponent},
          {path: 'details/:id', component :ProductDetailComponent},
          {path: 'cart', component :CartComponent},
          {path: 'contact', component :ContactComponent},
          {path: 'author', component :AuthorComponent},
          {path: 'book', component :BookComponent},
          {path: 'login', component :LoginComponent},
          {path: 'register', component :RegisterComponent},
          {path: 'who-we-are', component :WhoWeAreComponent,
            children: [
              { path: '', redirectTo: 'who', pathMatch: 'full' },
              { path: 'who', component: WhoComponent },
              { path: 'cool', component: CoolComponent }
            ]
          },
          {path: 'home', component :HomeComponent,
            children: [
              { path: '', redirectTo: 'feature', pathMatch: 'full' },
              { path: 'feature', component: FeatureComponent },
              { path: 'new-release', component: ReleaseComponent }
            ]
          },
          //{ path: '**', redirectTo: 'home' },
        ]
      },
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
