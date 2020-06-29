import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  @ViewChild('f') f:NgForm
  catgories$
  loading = false
  errMsg = null

  constructor(private CategoryService:CategoryService,private ProductService:ProductService,
    private router:Router,private route:ActivatedRoute) {
      this.catgories$ = this.CategoryService.getCats()
    }
  ngOnInit(): void {
  }

  save(p){
    this.loading = true
    this.ProductService.save(p).subscribe(res=>{
      this.loading = false
      alert('Product Added Successfully.')
      this.router.navigate(['panel'])
      },err=>{
        this.loading = false
        this.errMsg = 'Unauthorized Request !'
      })
    this.f.reset()
  }
  cancel(){
    this.f.reset()
    this.router.navigate(['panel'])
  }
}