import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    test: User = {
      id: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Type: '',
      Number: '',
      UserType: '',
    }
  ) {}

  ngOnInit(): void {}
}
