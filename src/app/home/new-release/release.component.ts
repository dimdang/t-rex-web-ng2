import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'release-app',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void{
    console.log("Ng onInit");
  }
}

