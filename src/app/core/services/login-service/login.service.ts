import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../../../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  uri = `http://${AppConstants.baseURL}/Login`;
  constructor(private http: HttpClient, private router: Router) {}

  public isValidUser(username: string, password: string) {
    // this.createUser();
    const loginDetails = {
      username,
      password
    };
    this.http.post(`${this.uri}/isValidUser/${username}`, loginDetails).subscribe(res => {
      console.log('Done', res);
    });
  }

  public createUser() {
    const obj = {
      username: 'gopi',
      password: 'test'
    };
    console.log(obj);
    this.http.post(`${this.uri}/addUser`, obj).subscribe(res => {
      console.log('Done');
    });
  }
}
