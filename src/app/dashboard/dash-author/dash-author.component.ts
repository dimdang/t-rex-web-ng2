import { Component, OnInit } from '@angular/core';
import {AuthorService} from './author.service';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-dash-author',
  templateUrl: './dash-author.component.html',
  styleUrls: ['./dash-author.component.css'],
  providers:[AuthorService, HeaderService]
})
export class DashAuthorComponent implements OnInit {
  authors=[]
  author = {
    firstname:"",
    lastname:"",
    image: "",
    status:true,
    description:""
  }

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthor().subscribe(
      (data) => this.authors=data.data
    )
  }

}
