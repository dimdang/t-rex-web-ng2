import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../services/header.service';
import {BookService} from '../book/book.service';
import {ActivatedRoute, Params,Router} from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers:[BookService, HeaderService]
})
export class ProductDetailComponent implements OnInit {
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
    photo:"",
    unit:0,
    description:"",
    author_name:""
  }

  constructor(
    private bookService: BookService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.bookService.getBookById(id).subscribe(
        data=>{
          console.log(data);
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
          this.book.photo=data.data.image;
          this.book.unit=data.data.unit;
          this.book.description=data.data.description;
          this.book.author_name=data.data.author_name;
        });
    });
  }
// add product to cart
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
