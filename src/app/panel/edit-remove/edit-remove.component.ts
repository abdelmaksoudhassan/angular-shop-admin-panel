import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-remove',
  templateUrl: './edit-remove.component.html',
  styleUrls: ['./edit-remove.component.css']
})
export class EditRemoveComponent implements OnInit {
  id:string
  product:Product = null
  errMsg = null
  @ViewChild('f') f:NgForm
  catgories$
  loading = false

  constructor(private route:ActivatedRoute,
    private ProductService:ProductService,
    private CategoryService:CategoryService,
    private router:Router ) {
    this.catgories$ = this.CategoryService.getCats()
    
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id')
      this.ProductService.getById(this.id).subscribe(x=>{
        this.f.setValue({
          title:x.title,
          category:x.category,
          imgURL:x.imgURL,
          price:x.price
        })
      })
      })
  }

  ngOnInit(): void {
  }
  save(f){
    this.loading = true
    this.ProductService.updateOne(this.id,f).subscribe(res=>{
      alert('Product Updated Successfully.')
      this.loading = false
      this.router.navigate(['panel/List-All-Products'])
    },err=>{
      this.loading = false
      this.errMsg = 'Unauthorized Request !'
    })
  }
  cancel(){
    this.f.reset()
    this.router.navigate(['panel/List-All-Products'])
  }
  deleteProduct(){
    this.ProductService.deleteOne(this.id).subscribe(res=>{
      alert('Product Removed Successfully.')
      this.loading = false
      this.router.navigate(['panel/List-All-Products'])
    },err=>{
      this.loading = false
      this.errMsg = 'Unauthorized Request !'
    })
  }
}