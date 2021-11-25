import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validator, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/basepage/basepage.component';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

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
    
  ) {
    super(route);
  }

  override ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
