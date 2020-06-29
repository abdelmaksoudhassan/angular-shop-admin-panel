import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit,OnDestroy {
  products=[]
  filteredProducts=[]
  Subscription:Subscription

  constructor(private ProductService:ProductService) { 
   this.Subscription = this.ProductService.getAll().subscribe(x=>{
     this.filteredProducts = this.products = x
    })
  }

  ngOnInit(): void {
  }

  onSearch(query:string){
    this.filteredProducts = (query) ? this.products.filter(x=>x.title.toLowerCase().includes(query)) : this.products
  }

  ngOnDestroy(){
    this.Subscription.unsubscribe()
  }

}
