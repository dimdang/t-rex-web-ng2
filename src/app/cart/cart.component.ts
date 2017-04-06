import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartService, HeaderService]
})
export class CartComponent implements OnInit {
  carts=[];
  total=0;
  cartNumber=0;

  constructor(private cartService:CartService) { }

  ngOnInit() {

    let userLogin=localStorage.getItem("userId");
    if(userLogin !==null){
      this.cartService.getCart().subscribe(
        (data) => {
          this.carts=data.data.books;

          this.carts.forEach((item) => {
            this.total+=item.sub_total;
          });
          // get all number product in cart
          data.data.books.forEach(element=>{
            this.cartNumber+=element.unit;
          });
        });

    }
  }

}
