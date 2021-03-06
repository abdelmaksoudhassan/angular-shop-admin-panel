import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('title') title:string
  @Input('price') price:string
  @Input('category') category:string
  @Input('imgURL') imgURL:string

  constructor() { }

  ngOnInit(): void {
  }

}
