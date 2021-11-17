import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  NgModel,
} from '@angular/forms';
import { HttpServiceService } from 'src/app/config/http-service.service';

import { Customer } from '../../model/customer.model';
import { RegisterPostService } from './register.post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm = this.registerForm.group({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    displayName: '',
    userType: '',
    Password: '',
  });

  userProfile!: User;

  constructor(
    private registerForm: FormBuilder,
    private newUser: RegisterPostService
  ) {}

  ngOnInit() {}

  getUser() {
    this.newUser.getUsers().subscribe((users: User[]) => console.log(users));
  }
  addUser() {
    this.newUser.postUser(this.userProfile).subscribe((data) => {
      console.log(data);
      this.getUser();
    });
  }

  createUser() {
    this.userProfile = new User(
      this.userForm.value.username,
      this.userForm.value.lastName,
      this.userForm.value.email,
      this.userForm.value.firstName,
      this.userForm.value.displayName,
      this.userForm.value.userType
    );
  }

  onSubmit(): void {
    this.createUser();
    this.getUser();

    this.addUser();

    // this.userForm.reset();
  }

  //model = new User(this.userForm.value);
}
