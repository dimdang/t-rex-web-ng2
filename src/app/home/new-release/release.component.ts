import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book/book.service';
import {HeaderService} from '../../services/header.service';


@Component({
  selector: 'release-app',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css'],
  providers:[BookService,HeaderService]
})
export class ReleaseComponent implements OnInit {
  books=[];
  title = 'app works!';

  constructor(private bookService:BookService){}

  ngOnInit(): void{
    this.bookService.getBooks().subscribe(
      res=> {
        this.books=res.data.reverse();
        console.log(this.books);
    });
  }
}
