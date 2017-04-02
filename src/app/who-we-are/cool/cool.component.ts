import {Component, OnInit} from '@angular/core';

@Component({
  selector:'cool-app',
  templateUrl:'cool.component.html',
  styleUrls: ['cool.component.css']
})

export class  CoolComponent implements OnInit{

  className:string="border-bottom";
  ngOnInit(): void{
    console.log("Ng onInit");
  }
}
