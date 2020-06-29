import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  mode = 'sign'
  userDate : FormGroup
  errMsg :string
  user = null
  visible = false

  constructor(private AuthService:AuthService,private router:Router){}

  ngOnInit(){
    this.userDate = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)])
    })

    this.AuthService.autoLogin()
  }

  switchMode(){
    this.mode == 'sign' ? this.mode='log' : this.mode='sign'
  }

  handleUserData(){
    this.visible = true
    if(this.mode === 'sign'){
      this.AuthService.signUp(this.email.value,this.password.value).subscribe(res=>{
        this.router.navigate(['panel'])
        this.visible = false
      },err=>{
        this.visible = false
        this.errMsg = err
      })
    }else{
      this.AuthService.logIn(this.email.value,this.password.value).subscribe(res=>{
        this.router.navigate(['panel'])
        this.visible = false
      },err=>{
        this.visible = false
        this.errMsg = err
      })
    }
  }

  get email(){
    return this.userDate.get('email')
  }

  get password(){
    return this.userDate.get('password')
  }
}
