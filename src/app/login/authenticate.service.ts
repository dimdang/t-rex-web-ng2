import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";
import {HeaderService} from '../services/header.service';


@Injectable()
export class AuthenticateService {

  constructor(private http: Http, private router:Router, private header:HeaderService) { }

  loginAuthenticate(email: string, password: string) {
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);

    return this.http.post(this.header.API_URL+'login',
      {
        "account":
        {
          "email": email,
          "password": password
        }
      },{headers: headers})
      .map((response: Response) => {
        let user = response.json();
        console.log(user)
        if (user && user.data.token) {
          localStorage.setItem('token', JSON.stringify(user.data.token));
          localStorage.setItem('userId', JSON.stringify(user.data.id));
          this.router.navigate(["/dashboard"]);
        }else {
          alert("Email or password incorrect")
          this.router.navigate(["/login"]);
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  registerAuthenticate(email: string, password: string){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"accounts",{
      "account":
      {
        "email": email,
        "password": password,
        "role": 1,
        "status": true
      }
    },{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

}
