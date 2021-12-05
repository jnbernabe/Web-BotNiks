import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserRepository } from '../model/user.repository';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  constructor(
    private data: UserRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {
    Object.assign(this.user, data.getUser(activeRoute.snapshot.params['id']));
  }

  ngOnInit(): void {}

  save(_form: NgForm): void {
    this.data.saveUser(this.user);
    //this.router.navigateByUrl('/');
  }
}
