import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'header-app',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']

})

export class  HeaderComponent implements OnInit{
    pageTitle:string = `Home Test`;
    className:string="border-bottom";
    ngOnInit(): void{
        console.log("Ng onInit");
    }

}
