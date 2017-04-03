import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';
import {HeaderService} from '../services/header.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartService,HeaderService]
})
export class CartComponent implements OnInit {
  carts=[];
  total=0;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(
      (data) => {

        console.log(data);
        this.carts=data.data.books;

        this.carts.forEach((item) => {
          this.total+=item.sub_total;
        });
        
      }
    )
  }

}
