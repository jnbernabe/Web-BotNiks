import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppToastService } from '../toast/app-toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayName: string | null = this.getDisplayName();
  userId: string | null = this.getUserId();

  constructor(
    private auth: AuthService,
    private toast: AppToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDisplayName();
  }

  logout(): void {
    this.toast.showSuccess('Successfully Logged out');
    this.auth.logout();
  }
  isLoggedIn(): boolean {
    return localStorage['id_token'];
  }

  isLoggedOut(): boolean {
    return localStorage['id_token'];
  }

  getDisplayName(): string | null {
    //console.log(localStorage['displayName']);
    this.displayName = localStorage['displayName'];
    //console.log(localStorage);
    return this.displayName;
  }

  getUserId(): string | null {
    //console.log(localStorage);
    this.userId = localStorage['userID'];
    return this.userId;
  }

  // isLoggedOut():void{}
}
