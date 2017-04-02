import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";


@Injectable()
export class AuthenticateService {

  API_URL= "http://localhost:4900/api/v1/";

  constructor(private http: Http, private router:Router) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  loginAuthenticate(email: string, password: string) {
    let headers=new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(this.API_URL+'login',
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
    this.createAuthorizationHeader(headers);
    return this.http.post(this.API_URL+"accounts",{
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
