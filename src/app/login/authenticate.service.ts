import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";


@Injectable()
export class AuthenticateService {





  constructor(private http: Http, private router:Router) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  loginAuthenticate(email: string, password: string) {
    let headers=new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post('http://192.168.17.194:4900/api/v1/login',
      {
        "account":
        {
          "email": email,
          "password": password
        }
      },{headers: headers})
      .map((response: Response) => {
        let user = response.json();
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

}
