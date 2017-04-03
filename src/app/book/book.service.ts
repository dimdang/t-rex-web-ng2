import { Injectable ,OnInit, } from '@angular/core';
import {HeaderService} from '../services/header.service';
import {Http,Headers} from '@angular/http';

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

  getAuthorById(id:number){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"authors/"+id,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  addToCart(bookId:number, price:number){

    let userId =localStorage.getItem('userId');

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"carts",{"cart":
    {
      "price":price,
      "unit": 1,
      "book_id": bookId,
      "account_id": userId,
      "status":1
    }
    },{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

}
