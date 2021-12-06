// Edit user functionality
//Created by Han Bi
import { Component, Input, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  NgModel,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { RegisterPostService } from 'src/app/config/register.post.service';
import { User } from '../model/user.model';
import { UserRepository } from '../model/user.repository';
import { AuthService } from '../services/auth/auth.service';

let editedObj: any;
let id: string;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  edituser!: User | null;
  userForm!: FormGroup;
  userProfile!: User;
  @Input() value: string | any;

  constructor(
    private registerForm: FormBuilder,
    private data: UserRepository,
    private route: ActivatedRoute,
    private newUser: RegisterPostService,
    private auth: AuthService,
    private router: Router
  ) {}

  routeSub!: Subscription;
  ngOnInit() {
    this.data.waitForData().then((result) => {
      this.routeSub = this.route.params.subscribe((params) => {
        if (params['id'] != null) {
          editedObj = this.data.getUser(params['id']);
          id = params['id'];
          console.log(editedObj);
        }
      });
      this.initForm();
    });

    this.userForm = this.registerForm.group({
      username: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      displayName: [null, [Validators.required]],
      userType: [null, [Validators.required]],
      Password: [null, [Validators.required]],
    });
  }

  public initForm() {
    this.userForm.get('username')?.setValue(editedObj['username']);
    this.userForm.get('firstName')?.setValue(editedObj['firstName']);
    this.userForm.get('lastName')?.setValue(editedObj['lastName']);
    this.userForm.get('email')?.setValue(editedObj['email']);
    this.userForm.get('displayName')?.setValue(editedObj['displayName']);
    this.userForm.get('userType')?.setValue(editedObj['userType']);
    this.userForm.get('Password')?.setValue(editedObj['password']);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

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

  updateUser(user: User) {
    this.data.saveUser(user).subscribe((obj) => {});
  }

  createUser() {
    this.userProfile = new User(
      this.userForm.value.username,
      this.userForm.value.email,
      this.userForm.value.displayName,
      this.userForm.value.firstName,
      this.userForm.value.lastName,
      this.userForm.value.userType,
      this.userForm.value.Password
    );
    this.userProfile.userID = id;

    this.updateUser(this.userProfile);
  }

  onSubmit(): void {
    if (!this.userForm.valid) {
      window.alert('Form is not complete');
    }

    this.createUser();
    this.router.navigateByUrl('/');

    // this.userForm.reset();
  }
}
