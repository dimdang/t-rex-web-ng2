import {Component, OnInit} from '@angular/core';

@Component({
  selector:'whoWe-app',
  templateUrl:'who.component.html',
  styleUrls: ['who.component.css']
})

export class  WhoComponent implements OnInit{

  className:string="border-bottom";
  ngOnInit(): void{
    console.log("Ng onInit");
  }
}
