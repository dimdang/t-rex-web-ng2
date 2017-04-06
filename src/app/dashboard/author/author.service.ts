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

  addAuthor(author:FormData){

      let headers=new Headers();
      this.header.createAuthorizationHeader(headers);
      return this.http.post(this.header.API_URL+"authors",author,{
        headers: headers
      }).map(
        (res)=> res.json()
      )
    }

    deleteAuthor(id:number){
      let headers=new Headers();
      this.header.createAuthorizationHeader(headers);
      return this.http.delete(this.header.API_URL+"authors/"+id,{headers}).map(
        res=> {return ;}
      )
    }

    updateAuthor(author:FormData, id:number){

      let headers=new Headers();
      this.header.createAuthorizationHeader(headers);
      return this.http.put(this.header.API_URL+"authors/"+id,author,{
        headers: headers
      }).map(
        (res)=> res.json()
      )
    }

    getAuthorById(id:number){
      let headers=new Headers();
      this.header.createAuthorizationHeader(headers);
      return this.http.get(this.header.API_URL+"authors/"+id,{
        headers: headers
      }).map(
        (res)=> res.json()
      )
    }
}
