import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../services/header.service';
import {PaymentService} from './payment.service';
import {CartService} from '../cart/cart.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers:[HeaderService, PaymentService, CartService]
})
export class PaymentComponent implements OnInit {
  carts=[];
  total=0;
  cart = {
    name:"hjhjk",
    number:0,
    exp_year:0,
    exp_month:0,
    cvc:0,
    amount:0
  }

  constructor(private paymentService:PaymentService, private cartService: CartService) { }

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
  addPayment(){
    console.log(this.cart.name+"number:"+this.cart.number+"exp_month:"+this.cart.exp_month+
  "exp_y: "+this.cart.exp_year+"cvc:"+this.cart.cvc+"total:"+this.total);
    this.paymentService.addPayment(
      this.cart.name,
      this.cart.number,
      this.cart.exp_month,
      this.cart.exp_year,
      this.cart.cvc,
      this.total)
    .subscribe(
      data=>{
          alert("suucccceessssss");
      },
      error=>{
        alert("failed");
      }
    )
  }

}
