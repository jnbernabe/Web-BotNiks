import { Injectable } from '@angular/core';
import { BehaviorSubject, config, Observable, of, throwError } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { RegisterPostService } from '../../config/register.post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  // constructor(private router: Router, private http: HttpClient) {
  //   this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  // }
  user?: User;
  baseUrl?: string;
  authToken?: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: any, password: any) {
    return this.http
      .post<any>(this.baseUrl + `users/login`, { username, password })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
    //return this.getToken() !== null;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    // this.router.navigate(['home']);
  }

  // login(email: any, password: any) {
  //   return this.http
  //     .post<User>(this.baseUrl + 'user/login', { email, password })
  //     .pipe(
  //       map((user) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //         return user;
  //       })
  //     );
  //.subscribe((res) => this.setLocalStorage);
}

// private setLocalStorage(authResult: any) {
//   // Takes the JWT expiresIn value and add that number of seconds
//   // to the current "moment" in time to get an expiry date
//   const expiresAt = moment().add(authResult.expiresIn, 'second');

//   // Stores our JWT token and its expiry date in localStorage
//   localStorage.setItem('id_token', authResult.idToken);
//   localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
// }

// getExpiration() {
//   const expiration = localStorage.getItem('expires_at');
//   const expiresAt = JSON.parse(expiration);
//   return moment(expiresAt);
// }
