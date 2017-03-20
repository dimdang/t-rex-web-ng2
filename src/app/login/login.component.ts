/*
import { Component, OnInit } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {

  data: Object={};
  constructor(private router: Router){}


  constructor(private router: Router) {
    formSubmit(){
      uname=this.data.username;
      pass= this.data.password;
      key= btoa(data);
      console.log(this.data);
      if(this.data.username=="admin" && this.data.password=="admin"){
        this.router.navigate(['dashboard']);
      }
    }
  }

  ngOnInit() {
  }

}
*/
