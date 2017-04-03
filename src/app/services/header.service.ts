import { Injectable } from '@angular/core';
import {Headers} from "@angular/http";

@Injectable()
export class HeaderService {

  API_URL= "http://localhost:4900/api/v1/";
  // API_URL= "http://192.168.17.194:4900/api/v1/";


  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  constructor() { }

}
