import {Component} from '@angular/core';

@Component({
    selector: 'book-app',
    templateUrl:'book.component.html',
    styleUrls: ['book.component.css']

})

export class  BookComponent {
    pageTitle:string = `Home Test`;
    className:string="border-bottom";
}