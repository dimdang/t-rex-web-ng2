import {Component} from '@angular/core';

@Component({
    selector: 'author-app',
    templateUrl:'author.component.html',
    styleUrls: ['author.component.css']

})

export class  AuthorComponent {
    pageTitle:string = `Home Test`;
    className:string="border-bottom";

}