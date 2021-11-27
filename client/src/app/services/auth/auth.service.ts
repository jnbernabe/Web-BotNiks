import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { RegisterPostService } from '../../config/register.post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'https';
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
  ) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      alert("login successful");
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      console.log(this.getToken());
      return of({ name: 'Admin', email: 'admin@gmail.com' });

    }
    return throwError(new Error('Failed to login'));
  }

  login2(email: string, password: string) {
    return this.http.post<User>('/user', { email, password });
    // this is just the HTTP call,
    // we still need to handle the reception of the token
  }
  

    /* login1(data): Observable<any>{
       console.log('SERVER SIDE');
       return this.http.post("http://localhost:3000/user",data);
     }*/
}
