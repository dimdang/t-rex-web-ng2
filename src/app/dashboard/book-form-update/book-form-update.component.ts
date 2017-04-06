import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {AuthorService} from '../author/author.service';
import {BookService} from '../books/book.service';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {CategoryService} from '../category/category.service';


@Component({
  selector: 'app-book-form-update',
  templateUrl: './book-form-update.component.html',
  styleUrls: ['./book-form-update.component.css'],
  providers:[HeaderService, AuthorService,BookService, AuthorService, CategoryService]
})
export class BookFormUpdateComponent implements OnInit {

  constructor(
    private authorService:AuthorService,
    private activatedRoute:ActivatedRoute,
    private bookService:BookService,
    private categoryService:CategoryService,
    private router:Router) { }

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

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.bookService.getBookById(id).subscribe(
        data=>{
          this.book.id=id;
          this.book.title=data.data.title;
          this.book.status=data.data.status;
          this.book.shipping_weight=data.data.shipping_weight;
          this.book.publisher_name=data.data.publisher_name;
          this.book.published_year=data.data.published_year;
          this.book.price=data.data.price;
          this.book.language=data.data.language;
          this.book.page_count=data.data.page_count;
          this.book.language=data.data.language;
          this.book.isbn=data.data.isbn;
          this.book.author_id=data.data.author_id;
          this.book.category_id=data.data.category_id;
          this.book.book_dimensions=data.data.book_dimensions;
          this.book.photo=data.data.photo;
          this.book.unit=data.data.unit;
          this.book.description=data.data.description;
        });
    });

    this.categoryService.getCategory().subscribe(
      res=> this.categories=res.data
    )

    this.authorService.getAuthor().subscribe(
      res=> this.authors=res.data
    )
  }

  fileChange(event) {
    this.book.photo = event.target.files;

  }

  updateBook(){

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

    this.bookService.updateBook(book, this.book.id).subscribe(
      data=>{
        alert("success");
        this.router.navigate(["/dashboard/book"]);
      },
      error=> {
        alert("Fail");
      }
    )

  }
}
