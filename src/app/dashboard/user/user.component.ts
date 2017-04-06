import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[HeaderService,UserService]
})
export class UserComponent implements OnInit {
  users=[];

  constructor( private userService:UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
      res=> this.users=res.data
    )
  }

}
