import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {HeaderService} from '../../services/header.service';

@Injectable()
export class AuthorService {

  constructor(private http: Http, private header:HeaderService) { }

  getAuthor(){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"authors",{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  addAuthor(photo: string, firstname:string, lastname:string, description:string, status:boolean){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"authors",{"author":
    {
      "photo":photo,
      "lastname": lastname,
      "firstname": firstname,
      "status": status,
      "description":description
    }
    },{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

}
