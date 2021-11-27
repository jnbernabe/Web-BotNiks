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
<<<<<<< HEAD
    private router: Router
=======
    private router: Router,
    private http:HttpClient,
    
>>>>>>> main
  ) {
    super(route);
  }

  override ngOnInit(): void {}

 /* onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/table']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }*/

  onSubmit(){
      this.http.get<any>("http://localhost:3000/user").subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
        });
        if (user) {
          alert("login Succeful");
          console.log(res);
          this.loginForm.reset();
          this.router.navigate(['/admin']);
        }else {
          alert('user not found!');
        }
      }, err => {
        alert("Something Went Wrong");
      })
    }
}
