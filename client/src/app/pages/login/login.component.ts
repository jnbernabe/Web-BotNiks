import { Router } from '@angular/router';
import { AuthService } from '../../admin/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validator,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/basepage/basepage.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BasePageComponent implements OnInit {
  [x: string]: any;

  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.minLength(6)]),
  });

  constructor(route: ActivatedRoute,private auth: AuthService,private http:HttpClient, private router: Router) {
    super(route);
  }

  override ngOnInit(): void {}

 /* onSubmit(): void{
    if (this.loginForm.valid) {
    /* this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/home']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );*/

  onSubmit(){
    this.http.get<any>("http://localhost:3000/user").subscribe(
      res=>{
        const user = res.find((a:any)=>{
          console.log(this.loginForm.value);
          return a.email ===this.loginForm.value.email && a.password ===this.loginForm.value.password
        });
        if(user){
          alert("login successful");
          this.loginForm.reset();
          this.router.navigate(['/home']);

        }else{
          alert("user not found");

        }
      }
    )
    
  }
  }

