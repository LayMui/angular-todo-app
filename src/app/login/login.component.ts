import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'laymui';
  password = 'secret';

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log('Log in' + this.username + ' ' + this.password);
  }

}
