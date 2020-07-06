import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  // tslint:disable-next-line: typedef
  authenticate(username, password) {
    if (username === 'laymui' && password === 'secret') {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    return false;
  }

  // tslint:disable-next-line: typedef
  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout()
  {
    sessionStorage.removeItem('authenticateUser');
  }
}
