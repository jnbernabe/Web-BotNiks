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
import { AppToastService } from 'src/app/partials/toast/app-toast.service';

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

  constructor(
    route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient,
    public toast: AppToastService
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
    } else {
      this.toast.show('Error', 'Login Error');
    }
  }
}
