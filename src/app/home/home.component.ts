import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void{
    console.log("Ng onInit");
  }
}

