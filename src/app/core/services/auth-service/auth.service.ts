import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  checkSession: boolean;

  constructor() {}

  isUserAuthenticated() {
    if (this.isLoggedIn) {
      return true;
    } else {
      // TODO: change it once full implementation done.
      return true;
    }
  }

  get isLoggedIn() {
    const isLoggedInApp = sessionStorage.getItem('token');
    return isLoggedInApp;
  }
}
