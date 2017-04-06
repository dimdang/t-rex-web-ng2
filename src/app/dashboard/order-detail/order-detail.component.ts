import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {OrderService} from '../dash-order/order.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers:[OrderService, HeaderService]
})
export class OrderDetailComponent implements OnInit {
  books=[];
  profile=[];
  total=0;
  constructor(
    private orderService: OrderService,
    private activatedRoute:ActivatedRoute,

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.orderService.getOrderDatail(id).subscribe(
        data=>{
          this.books=data.data.books;
          this.profile=data.data.profile;
          data.data.books.forEach(element=>{
            this.total += element.sub_total;
          })
        });
    });
  }

}
