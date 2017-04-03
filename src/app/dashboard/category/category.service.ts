import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {HeaderService} from '../../services/header.service';
import {ICategory} from './category';

@Injectable()
export class CategoryService {

  constructor(private http: Http , private header: HeaderService) { }


  getCategory(){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"categories",{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  addCategory(name:string, description:string, status:boolean){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.post(this.header.API_URL+"categories",{"category":
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

  deleteCateogry(id: number){
    let header =new Headers();
    this.header.createAuthorizationHeader(header);
    return this.http.delete(this.header.API_URL+"categories/"+id,{headers: header}).map(
      (res)=> {return;}
    )
  }

  getCategoryById(id:number){
    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.get(this.header.API_URL+"categories/"+id,{
      headers: headers
    }).map(
      (res)=> res.json()
    )
  }

  updateCategory(name:string, description:string, status:boolean,id:number){

    let headers=new Headers();
    this.header.createAuthorizationHeader(headers);
    return this.http.put(this.header.API_URL+"categories/"+id,{"category":
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
