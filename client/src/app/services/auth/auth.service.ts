/*
Created by: Hetu & Jamaal
Auth Service
Last Edited: November 28, 2021

 */
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { RegisterPostService } from '../../config/register.post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { AppToastService } from 'src/app/partials/toast/app-toast.service';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user?: User;
  baseUrl: string;
  authToken?: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private toast: AppToastService
  ) {
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    this.baseUrl = `https://web-botniks-incident.herokuapp.com/api/`;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return localStorage['id_token'];
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('displayName');
    this.toast.showDanger('Logged Out');
    this.router.navigateByUrl('/home');
    this.toast.showDanger('Logged Out');
  }

  login(email: any, password: any) {
    return this.http
      .post<any>(this.baseUrl + 'user/login', {
        email: email,
        password: password,
      })
      .subscribe(
        (res) => {
          //console.log(res);
          //window.alert('Login Successfully');
          if (res.success == true) {
            this.setLocalStorage(res);
            this.router.navigateByUrl('/table');
            this.toast.showSuccess('Login Successful!');
          } else {
            this.toast.showDanger('Login Failed!');
          }
        },
        (err) => {
          console.log('Bad response');
          this.toast.showDanger(err.message);
          // window.alert(err);
        }
      );
  }

  setLocalStorage(authResult: any) {
    // Takes the JWT expiresIn value and add that number of seconds
    // to the current "moment" in time to get an expiry date
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    // Stores our JWT token and its expiry date in localStorage
    localStorage.setItem('id_token', authResult['token']);
    //console.log(authResult['user']['displayName']);
    localStorage.setItem(
      'displayName',
      authResult['user']['displayName'].toString()
    );
    localStorage.setItem('userID', authResult['user']['userID'].toString());
    //console.log(localStorage['displayName']);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }
}
