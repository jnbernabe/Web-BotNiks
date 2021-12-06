import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validator, FormControl, FormGroup } from '@angular/forms';
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
    email: new FormControl(''),
    password: new FormControl(''),
  });

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
    const email = this.loginForm.value.email.toString();
    const password = this.loginForm.value.password.toString();

    this.auth.login(email, password);
  }
}
