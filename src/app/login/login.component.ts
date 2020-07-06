import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'laymui';
  password = 'secret';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  // Router
  // Dependency Injection:

  ngOnInit(): void {
  }

  handleLogin() {
    console.log('Log in' + this.username + ' ' + this.password);
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
}
