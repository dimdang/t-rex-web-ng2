import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class AuthorService {

  API_URL="http://localhost:4900/api/v1/";

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  getAuthor(){
    let headers=new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.API_URL+"authors",{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  addAuthor(photo: string, firstname:string, lastname:string, description:string, status:boolean){

    let headers=new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.API_URL+"authors",{"author":
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
