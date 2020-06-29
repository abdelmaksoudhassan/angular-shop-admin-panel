import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  loading = false
  errMsg = null
  constructor(private CategoryService:CategoryService) { }

  ngOnInit(): void {
  }
  saveCategory(f){
    this.loading = true
    this.CategoryService.addCategory(f).subscribe(res=>{
      this.loading = false
      this.errMsg = null
      alert('Category Added Successfully..')
    },err=>{
      this.loading = false
      this.errMsg = "Connection Error"
    })
  }
}
