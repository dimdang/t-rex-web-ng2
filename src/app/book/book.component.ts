import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../services/header.service';
import {BookService} from './book.service';
import {Router} from '@angular/router';

@Component({
    selector: 'book-app',
    templateUrl:'book.component.html',
    styleUrls: ['book.component.css'],
    providers:[HeaderService, BookService]

})

export class  BookComponent implements OnInit{
    books=[];
    pageTitle:string = `Home Test`;
    className:string="border-bottom";

    constructor(private bookService:BookService, private router:Router){}

    ngOnInit() {
      this.bookService.getBooks().subscribe(
        res=> {this.books=res.data.reverse();
      });
    }

    addToCart(bookId:number, price:number){
      let userLogin =localStorage.getItem("userId");
      if(userLogin!==null){
        this.bookService.addToCart(bookId, price).subscribe(
          res=>{
            alert("sssssss");
          },
          error=>{
            alert("failed");
          });
      }else {this.router.navigate(["/login"]);}

    }
}
