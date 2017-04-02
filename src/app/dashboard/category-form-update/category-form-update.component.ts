import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ICategory} from '../model/category';
import {HeaderService} from '../../services/header.service';
import {CategoryService} from '../category/category.service';

@Component({
  selector: 'app-category-form-update',
  templateUrl: './category-form-update.component.html',
  styleUrls: ['./category-form-update.component.css'],
  providers:[HeaderService,CategoryService]
})
export class CategoryFormUpdateComponent implements OnInit {

  category = {
    id:0,
    name:"",
    status:true,
    description:""
  }


  constructor( private router:Router,private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService) { }

  ngOnInit() {

      this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
        this.categoryService.getCategoryById(id).subscribe(
          data=>{
            this.category.id=id;
            this.category.name=data.data.name;
            this.category.description=data.data.description;
            this.category.status=data.data.status;
          });
      });
  }

  updateCategory(){
    this.categoryService.updateCategory(this.category.name,this.category.description,this.category.status,this.category.id).subscribe(
      (data) => this.router.navigate(["/dashboard/category"])
    )
  }

}
