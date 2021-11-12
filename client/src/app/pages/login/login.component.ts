import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/basepage/basepage.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BasePageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {}
}
