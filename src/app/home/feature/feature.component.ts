import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book/book.service';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'feature-app',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  providers:[BookService, HeaderService]
})
export class FeatureComponent implements OnInit {
  books=[];
  title = 'app works!';

  constructor(private bookService:BookService){}
  ngOnInit(): void{
    this.bookService.getBooks().subscribe(
      res=> {
        this.books=res.data;
        console.log(this.books);
    });
  }
}
