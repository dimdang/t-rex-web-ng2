
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoggerService {

  constructor(private http: Http) { }

  books= [];

  account={
    "account":
    {
      "email": "thanak@gmail.com",
      "password": "12345",
      "role": 1,
      "status": true
    }
  }

  logger(){
    console.log(" I am the logging");
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  getBook(){
    let headers=new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get("http://192.168.17.194:4900/api/v1/accounts",{
      headers: headers
    }).map(
    (res)=> res.json()
    )
  }

  postUser(){
    let headers=new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post("http://192.168.17.194:4900/api/v1/accounts",this.account,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }



}

