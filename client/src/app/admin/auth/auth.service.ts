import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUserData={};

  constructor(http: HttpClient) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
  //  this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Admin', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  /*login(user){
    return this.http.post<any>(this._loginUrl, user)
  }*/
}
