import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category/category.service';
import {AuthorService} from '../author/author.service';
import {BookService} from '../books/book.service';
import {number} from "ng2-validation/dist/number";
import {Router} from "@angular/router";
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  providers:[CategoryService, AuthorService,BookService,HeaderService]
})
export class BookFormComponent implements OnInit {
  categories=[];
  authors=[];

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
    author_id:0,
    category_id:0,
    book_dimensions:"",
    id:0,
    photo: File,
    unit:0,
    description:""
  }

  constructor(private categoryService :CategoryService,
    private authorService: AuthorService,
    private bookService:BookService,
    private router:Router,
    private header:HeaderService
    ) {
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(
      res=> this.categories=res.data
    )

    this.authorService.getAuthor().subscribe(
      res=> this.authors=res.data
    )
  }

  addBook(){

    let book:FormData = new FormData();
    let file: File = this.book.photo[0];
    book.append('photo',file,file.name);
    book.append('title',this.book.title)
    book.append('isbn',this.book.isbn);
    book.append('price',this.book.price);
    book.append('unit',this.book.unit);
    book.append('publisher_name',this.book.publisher_name);
    book.append('published_year',this.book.published_year);
    book.append('page_count',this.book.page_count);
    book.append('shipping_weight',this.book.shipping_weight);
    book.append('book_dimensions',this.book.book_dimensions);
    book.append('category_id',this.book.category_id);
    book.append('author_id',this.book.author_id);
    book.append('language',this.book.language)
    book.append('description',this.book.description)


    alert("book dimension:"+this.book.book_dimensions);
    this.bookService.addBook(book).subscribe(
      data=>{
        alert("success");
        this.router.navigate(["/dashboard/book"]);
      },
      error=> {
        alert("Fail");
      }
    )

  }

  fileChange(event) {
    this.book.photo = event.target.files;

  }


}
