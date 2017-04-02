import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {HeaderService} from '../../services/header.service';

@Injectable()
export class BookService {

  constructor(private  http:Http, private header:HeaderService) { }

  getBooks(){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers)
    return this.http.get(this.header.API_URL+"books",{headers}).map(
      res=> res.json()
    )
  }

  addBook(book:FormData){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"books",book,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }
}
