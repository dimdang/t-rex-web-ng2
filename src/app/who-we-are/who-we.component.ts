import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'who-app',
    templateUrl:'who-we.component.html',
    styleUrls: ['who-we.component.css']

})

export class  WhoWeAreComponent implements OnInit{

    className:string="border-bottom";
    ngOnInit(): void{
        console.log("Ng onInit");
    }
}
