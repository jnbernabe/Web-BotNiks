import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { RegisterPostService } from './register.post.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  edituser!: User;
  userForm!: FormGroup;
  userProfile!: User;

  constructor(
    private registerForm: FormBuilder,
    private newUser: RegisterPostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.editUser('Jamaal');
    this.getUser();

    this.userForm = this.registerForm.group({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      displayName: '',
      userType: '',
      Password: '',
    });
  }

  ngOnDestroy() {}

  editUser(id: string) {
    this.newUser.getUsers().subscribe((users: User[]) =>
      users.forEach((user: User) => {
        if (user.username == id) {
          this.edituser = user;
        }
      })
    );
  }

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
    if (!this.userForm.valid) {
      window.alert('Form in not complete');
    }

    this.createUser();

    this.addUser();

    // this.userForm.reset();
  }

  //model = new User(this.userForm.value);
}
