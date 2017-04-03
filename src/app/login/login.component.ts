import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from './authenticate.service';
import {Router} from "@angular/router";
import {HeaderService} from '../services/header.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticateService,HeaderService]
})
export class LoginComponent implements OnInit {
  object=[];
  user = {
  email:"",
  password:""
}

  ngOnInit(){
    this.authenticateService.logout();
  }

  constructor(private router: Router, private authenticateService:AuthenticateService){}

  login() {
    this.authenticateService.loginAuthenticate(this.user.email, this.user.password)
      .subscribe(
        data => console.log(data),
        error => {
         alert("error occur.");
        });
  }
}
