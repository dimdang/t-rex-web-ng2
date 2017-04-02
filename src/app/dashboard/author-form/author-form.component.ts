import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../services/author.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
  providers:[AuthorService]
})
export class AuthorFormComponent implements OnInit {

  author = {
    firstname:"",
    lastname:"",
    photo: "",
    status:true,
    description:""
  }

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }

  addAuthor(){

    alert(this.author.photo);
    this.authorService.addAuthor(this.author.photo, this.author.firstname,
      this.author.lastname, this.author.description, this.author.status).subscribe(
      (data) => this.router.navigate(["/dashboard/author"])

    )
  }

}
