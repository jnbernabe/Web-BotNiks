import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  userProfile?: User;

  constructor() {}

  ngOnInit() {}

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
