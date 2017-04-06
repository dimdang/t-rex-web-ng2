import { Injectable } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {Http ,Headers} from '@angular/http';

@Injectable()
export class OrderService {

  constructor(private header:HeaderService, private http:Http) { }

  getOrder(){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"checkouts",{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  getOrderDatail(id:number){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"checkouts/"+id,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

}
