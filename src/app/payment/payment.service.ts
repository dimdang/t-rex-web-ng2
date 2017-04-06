import { Injectable } from '@angular/core';
import {HeaderService} from '../services/header.service';
import {Http, Headers} from "@angular/http";

@Injectable()
export class PaymentService {

  constructor(private http:Http,private header:HeaderService) { }

  addPayment(name:string, number:string,exp_month:string, exp_year:string,cvc:string, amount:number){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"payment",{"payment":
    {
      "name":name,
      "number": number,
      "exp_month": exp_month,
      "exp_year": exp_year,
      "cvc":cvc,
      "amount":amount
    }
    },{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  checkout( account_id){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"checkouts",{"checkout":
    {
      "account_id":account_id,
      "status":1
    }
    },{
      headers: headers
    }).map(
      (res)=> res.json()
    )

  }

}
