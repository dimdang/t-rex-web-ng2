import {Component, OnInit,ViewChild, ElementRef} from '@angular/core';
//import {NgIf} from 'angular2/angular2';


@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  constructor(){}
  title = 'app works!';

  ngOnInit(): void{

  }

}
