import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  user = null
  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
    this.AuthService.user.subscribe(user=>{
      this.user = user
    })
  }

  get userName(){
    return this.user.email.substr(0,this.user.email.indexOf('@'))
  }
}
