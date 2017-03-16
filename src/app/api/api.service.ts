import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';

@Injectable
export class ApiService{
  constructor(private _http: Http){}

  getBook(): IBook[]{
    return this._http.get('json/books.json')
      .map((response: Response) => response.json())
  }
}
