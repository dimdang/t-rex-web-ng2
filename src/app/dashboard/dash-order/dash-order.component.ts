import { Component, OnInit } from '@angular/core';
import {OrderService} from './order.service';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-dash-order',
  templateUrl: './dash-order.component.html',
  styleUrls: ['./dash-order.component.css'],
  providers:[OrderService,HeaderService]
})
export class DashOrderComponent implements OnInit {
  orders=[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrder().subscribe(
        data=>{
          this.orders=data.data;
          console.log(this.orders);
        }
    )
  }

}
