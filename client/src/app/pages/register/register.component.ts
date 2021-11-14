import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { HttpServiceService } from 'src/app/config/http-service.service';
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(),
    Fname: new FormControl(),
    Lname: new FormControl(),
    Email: new FormControl(),
    Number: new FormControl(),
    Type: new FormControl(),
  });

  posts: any;
  userProfile?: User;

  constructor(private http: HttpServiceService) {}

  ngOnInit() {
    console.log(this.http.getCustomers());
  }

  onSubmit(): void {
    this.userProfile = new User(
      this.userForm.value.Fname,
      this.userForm.value.Lname,
      this.userForm.value.Email,
      this.userForm.value.username,
      this.userForm.value.Number,
      this.userForm.value.Type
    );
    console.log(this.userProfile);
    let userjson = JSON.stringify(this.userProfile);
    this.userForm.reset;
  }

  //model = new User(this.userForm.value);
}
