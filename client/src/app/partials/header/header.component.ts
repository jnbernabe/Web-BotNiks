import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayName: string | null = this.getDisplayName();
  userId: string | null = this.getUserId();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getDisplayName();
  }

  logout(): void {
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
