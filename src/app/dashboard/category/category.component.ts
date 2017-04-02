import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';
import {PagerService} from '../services/pager.service';
import {Router} from '@angular/router';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService, PagerService,HeaderService]
})
export class CategoryComponent implements OnInit {
  categories=[];

  category = {
    name:"",
    status:true,
    description:""
  }

  pager: any = {};

  pagedItems: any[];

  ngOnInit() {
    this.categoryService.getCategory().subscribe(
      (data) => {this.categories=data.data;}
    )
  }

  constructor(private categoryService: CategoryService, private pagerService: PagerService,
  private router:Router) { }

  addCategory(){
    this.categoryService.addCategory(this.category.name, this.category.description, this.category.status).subscribe(
      (data)=> console.log(data)
    )
  }

  delete(id:number){
    this.categoryService.deleteCateogry(id).subscribe(
      data =>{
        alert("success");
        this.categoryService.getCategory().subscribe(
          (data) => {
                      this.categories=data.data;
        });
      });
  }


}
