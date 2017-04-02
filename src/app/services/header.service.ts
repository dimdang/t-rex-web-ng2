
export class HeaderService {

  API_URL= "http://localhost:4900/api/v1/";

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'dC1yZXg6dC1yZXhAMm50JUVsaXhpcjk=');
  }

  constructor() { }

}
