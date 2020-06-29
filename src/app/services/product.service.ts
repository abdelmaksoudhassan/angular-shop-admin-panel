import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  save(p){
    return this.http.post('https://angular-shop-6b594.firebaseio.com/products.json',p)
  }
  getAll(){
    return this.http.get('https://angular-shop-6b594.firebaseio.com/products.json').pipe(map(res=>{
      const arr=[]
      for(const key in res){
        const product = res[key]
        product.id = key
        arr.push(product)
      }
      return arr
    }))
  }
  getById(id:string){
    return this.http.get<Product>('https://angular-shop-6b594.firebaseio.com/products/'+ id +'.json')
  }
  updateOne(id:string,product:Product){
    return this.http.put('https://angular-shop-6b594.firebaseio.com/products/'+ id +'.json',product)
  }
  deleteOne(id:string){
      return this.http.delete('https://angular-shop-6b594.firebaseio.com/products/'+ id +'.json')
  }
}