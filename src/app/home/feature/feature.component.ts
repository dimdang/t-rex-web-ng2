import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'feature-app',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void{
    console.log("Ng onInit");
  }
}

