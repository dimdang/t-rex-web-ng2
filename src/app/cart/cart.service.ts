import { Injectable } from '@angular/core';
import {HeaderService} from '../services/header.service';
import {Http, Headers} from "@angular/http";

@Injectable()
export class CartService {

  constructor(private http: Http, private header:HeaderService) { }

  getCart(){
    let userId =localStorage.getItem('userId');

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"carts/user/"+userId,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }
}
