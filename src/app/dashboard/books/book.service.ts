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

  updateBook(book:FormData, id:number){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.put(this.header.API_URL+"books/"+id,book,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  getBookById(id:number){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"books/"+id,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  deleteBook(id:number){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.delete(this.header.API_URL+"books/"+id,{headers}).map(
      res=> {return ;}
    )
  }
}
