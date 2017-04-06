import {Component, OnInit} from '@angular/core';
import {CartServices} from './cart.service';
import {CartService} from '../cart/cart.service';
import {HeaderService} from '../services/header.service';

@Component({
    selector: 'header-app',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [CartServices,CartService, HeaderService]
})

export class  HeaderComponent implements OnInit{
    cartNumber=0;
    className:string="border-bottom";

    constructor(private cartService:CartService){}
    ngOnInit(): void{
      let userLogin= localStorage.getItem("userId");
      if(userLogin!==null){
        this.cartService.getCart().subscribe(
          data=>{
            data.data.books.forEach(element=>{
              this.cartNumber+=element.unit;
            });
          })
      }
    }

}
