import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  show = true
  sideClass = 'show'
  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.AuthService.logOut()
  }
  toggle(){
    this.show =! this.show
    this.show ? this.sideClass='show' : this.sideClass='hide'
  }

}
