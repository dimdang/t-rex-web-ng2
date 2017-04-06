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
    name:"",
    number:"",
    exp_year: "",
    exp_month: "",
    cvc: "",
    amount:""
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
    let account_id=localStorage.getItem("userId");
    this.paymentService.addPayment(
      this.cart.name,
      this.cart.number,
      this.cart.exp_month,
      this.cart.exp_year,
      this.cart.cvc,
      this.total*100)
    .subscribe(
      data=>{
          if(data.data.paid){
              this.paymentService.checkout(account_id).subscribe(
                res=>{alert("payment successfully");}
              )
          }else{
            alert("payment fail");
          }
      },
      error=>{
        alert("failed");
      }
    )
  }

}
