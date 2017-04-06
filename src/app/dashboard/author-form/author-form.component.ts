import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author/author.service';
import {Router} from "@angular/router";
import {HeaderService} from '../../services/header.service';
import {number} from "ng2-validation/dist/number";

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
  providers:[AuthorService,HeaderService]
})
export class AuthorFormComponent implements OnInit {

  author = {
    firstname:"",
    lastname:"",
    photo: File,
    status:true,
    description:"",
    position:""
  }

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
  }

  addAuthor(){

    let author:FormData = new FormData();
    let file: File = this.author.photo[0];
    author.append('photo',file,file.name);
    author.append('firstname', this.author.firstname);
    author.append('lastname', this.author.lastname);
    author.append('status', this.author.status);
    author.append('description', this.author.description);
    author.append('position', this.author.position);

    this.authorService.addAuthor(author).subscribe(
      data=>{
        alert("success");
        this.router.navigate(["/dashboard/author"]);
      },
      error=> {
        alert("Fail");
      }
    )

  }

  fileChange(event) {
    this.author.photo = event.target.files;
  }

}
