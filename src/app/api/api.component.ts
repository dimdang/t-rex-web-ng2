import {Component, OnInit} from '@angular/core';
import {LoggerService} from './logger.service';


@Component({
  selector: 'api-app',
  templateUrl:'api.component.html',
  styleUrls:['api.component.css'],
  providers: [LoggerService]
})

export class ApiComponent implements OnInit{
  users=[]
    constructor( private LoggerService: LoggerService) {

    }

    ngOnInit(){
      this.LoggerService.getBook().subscribe(
        (data) => this.users=data.data
      )
    }

    post(){
      this.LoggerService.postUser().subscribe(
        (data)=> console.log(data)
      )
    }

}

