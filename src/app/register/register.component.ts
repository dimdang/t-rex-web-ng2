import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../login/authenticate.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthenticateService]
})
export class RegisterComponent implements OnInit {
  user = {
    email:"",
    password:""
  }

  constructor(private router: Router, private authenticateService:AuthenticateService){}

  ngOnInit() {

  }

  register() {
    this.authenticateService.registerAuthenticate(this.user.email, this.user.password)
      .subscribe(
        data => this.router.navigate(["/login"]),
        error => {
          alert("Register Error occur.");
        });
  }
}
