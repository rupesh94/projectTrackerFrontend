import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }



  loginUser(){
    if(this.userName == 'admin' && this.password == 'admin123')
    {
      console.log('Welcome to Project Tracker System...');
    }
  }
}
