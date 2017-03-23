import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {


  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  getCategory(){
    let headers=new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get("http://192.168.17.194:4900/api/v1/categories",{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  addCategory(name:string, description:string, status:boolean){

    let headers=new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post("http://192.168.17.194:4900/api/v1/categories",{"category":
      {
        "name": name,
        "description": description,
        "status": status
      }
    },{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

}
