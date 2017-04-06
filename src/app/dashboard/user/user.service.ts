import { Injectable } from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http, private header:HeaderService) { }

  getUsers(){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers)
    return this.http.get(this.header.API_URL+"accounts",{headers}).map(
      res=> res.json()
    )
  }

}
