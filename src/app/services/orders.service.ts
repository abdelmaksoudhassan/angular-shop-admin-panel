import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  getOrders(){
    return this.http.get('https://angular-shop-6b594.firebaseio.com/orders.json').pipe(map(res=>{
      let arr = []
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          const element = res[key];
          element.id = key
          arr.push(element)
        }
      }
      return arr
    }))
  }
}
