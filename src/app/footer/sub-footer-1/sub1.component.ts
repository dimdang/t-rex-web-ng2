import {Component} from '@angular/core';

@Component({
    selector: 'sub1-app',
    templateUrl:'sub1.component.html',
    styleUrls: ['sub1.component.css']

})

export class  Sub1Component {
    pageTitle:string = `Home Test`;
    className:string="border-bottom";

}