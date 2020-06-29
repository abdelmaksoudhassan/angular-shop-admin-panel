import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  orders = []
  order = {}

  constructor(private OrdersService:OrdersService) {
    this.OrdersService.getOrders().subscribe(x=>{
      this.orders = x
    })
  }

  ngOnInit(): void {
  }

  onDetails(order){
    this.order = order
  }

}
