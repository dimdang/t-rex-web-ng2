import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categories=[]
  category = {
    name:"Thanak",
    status:"fff",
    description:"ffffffff"
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(
      (data) => this.categories=data.data
    )
  }

  constructor(private categoryService: CategoryService) { }

  addCategory(){
    console.log("Name",this.category.name)
    this.categoryService.addCategory(this.category.name,this.category.description,this.category.status).subscribe(
      (data)=> console.log(data)
    )
  }

}
