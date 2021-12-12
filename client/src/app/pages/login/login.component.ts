/*
Created by: Jamaal
Login Screen
Last Edited: November 28, 2021

 */
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/basepage/basepage.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BasePageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  //console.log(console.error());

  /* loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });*/
  constructor(
    route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    super(route);
  }

  override ngOnInit(): void {}
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email.toString();
      const password = this.loginForm.value.password.toString();
      //console.log(email, password);
      this.auth.login(email, password);
    }
  }

  submitValidator(): Boolean {
    if (
      this.loginForm.controls['email'].invalid &&
      this.loginForm.hasError('required', 'email')
    ) {
      return true;
    } else if (
      this.loginForm.controls['password'].invalid &&
      this.loginForm.hasError('required', 'password')
    ) {
      return true;
    } else {
      return false;
    }
  }
}
