import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css']

})

export class  HomeComponent implements OnInit{
    pageTitle:string = `Home Test`;
    className:string="border-bottom";
    ngOnInit(): void{
        console.log("Ng onInit");
    }

}
