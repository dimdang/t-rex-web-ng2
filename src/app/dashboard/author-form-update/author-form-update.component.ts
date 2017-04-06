import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author/author.service';
import {HeaderService} from '../../services/header.service';
import {ActivatedRoute, Params,Router} from '@angular/router';

@Component({
  selector: 'app-author-form-update',
  templateUrl: './author-form-update.component.html',
  styleUrls: ['./author-form-update.component.css'],
  providers:[AuthorService, HeaderService]
})
export class AuthorFormUpdateComponent implements OnInit {
  authors=[]
  author = {
    id:0,
    firstname:"",
    lastname:"",
    image: "",
    status:true,
    description:"",
    photo:File,
    position:""
  }

  constructor(
    private authorService: AuthorService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.authorService.getAuthorById(id).subscribe(
        data=>{
          this.author.id=id;
          this.author.firstname=data.data.firstname;
          this.author.lastname=data.data.lastname;
          this.author.status=data.data.status;
          this.author.description=data.data.description;
          this.author.position=data.data.position;
          this.author.photo=data.data.photo;
          
        });
    });
  }

  updateAuthor(){

    let author:FormData = new FormData();
    let file: File = this.author.photo[0];
    author.append('photo',file,file.name);
    author.append('firstname', this.author.firstname);
    author.append('lastname', this.author.lastname);
    author.append('status', this.author.status);
    author.append('description', this.author.description);
    author.append('position', this.author.position);

    this.authorService.updateAuthor(author, this.author.id).subscribe(
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
