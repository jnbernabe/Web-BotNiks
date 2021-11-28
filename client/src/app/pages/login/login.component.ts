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

<<<<<<< HEAD
  onSubmit(){
      this.http.get<any>("http://localhost:3000/user").subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
        });
        if (user) {
          alert("login Successful");
          console.log(res);
          this.loginForm.reset();
          this.router.navigate(['/table']);
        }else {
          alert('user not found!');
        }
      }, err => {
        alert("Something Went Wrong");
      })
    }
=======
    this.auth.login(email, password);
  }
>>>>>>> 67c00af8dd438cc629bf8eeb33f9230c94354208
}
