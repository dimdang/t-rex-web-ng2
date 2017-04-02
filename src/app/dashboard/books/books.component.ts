import { Component, OnInit } from '@angular/core';
import {BookService} from './book.service';
import {HeaderService} from '../../services/header.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BookService, HeaderService]
})
export class BooksComponent implements OnInit {
  books=[]
  book = {
    title:"",
    status:1,
    shipping_weight:0.0,
    publisher_name:"",
    published_year:"",
    price:0.0,
    page_count:"",
    language:"",
    isbn:"",
    image:"",
    id:0,
    category_id:1,
    book_dimension:"",
    author_id:0

  }

  constructor(private bookService: BookService ) {

  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      res=> this.books=res.data
    )
  }

}
