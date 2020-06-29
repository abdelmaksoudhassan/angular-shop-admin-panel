import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input('order') order = null

  constructor() { }

  ngOnInit(): void {
    console.log(this.order.order)
  }
  get orderData(){
    return this.order.order
  }
}
