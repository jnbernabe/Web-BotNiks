import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../model/user.model';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
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
}
