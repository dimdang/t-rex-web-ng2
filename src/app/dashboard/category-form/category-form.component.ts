import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category/category.service";
import {Router} from "@angular/router";
import {HeaderService} from '../../services/header.service';



@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css'],
  providers: [CategoryService,HeaderService]
})
export class CategoryFormComponent implements OnInit {

  constructor(private categoryService: CategoryService, private  router:Router) { }

  category = {
    name:"",
    status:true,
    description:""
  }

  ngOnInit() {}

  addCategory(){
    this.categoryService.addCategory(this.category.name,this.category.description,this.category.status).subscribe(
      (data) => this.router.navigate(["/dashboard/category"])
    )
  }
}
