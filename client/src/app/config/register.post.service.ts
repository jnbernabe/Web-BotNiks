import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth/auth.service';

const PROTOCOL = 'http';
const PORT = 3000;
@Injectable({
  providedIn: 'root',
})
export class RegisterPostService {
  baseUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private http: HttpClient, auth: AuthService) {
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = `https://web-botniks-incident.herokuapp.com/api/`;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'user');
  }

  getUser(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + `user/edit/${id}`);
  }

  postUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.baseUrl + 'user/add', body, this.httpOptions);
  }

  registerUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(
      this.baseUrl + 'user/register',
      body,
      this.httpOptions
    );
  }

  postEditUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    console.log(body);
    return this.http.post(
      this.baseUrl + `user/edit/${user.userID}`,
      body,
      this.httpOptions
    );
  }
}
