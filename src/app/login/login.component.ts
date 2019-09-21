import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '@services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isValidUser: boolean;
  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {}

  login() {
    console.log(this.loginForm.value);
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;
    this.loginService.isValidUser(userName, password);
  }
}
