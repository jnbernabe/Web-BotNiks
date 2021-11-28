/*
Created by: Jamaal / Han
Restdatasource to communicate with server side

 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from './incident.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  //user?: User;
  baseUrl: string;
  //authToken: any;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  /*constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    //this.baseUrl = `https://comp229-f2020-week10.herokuapp.com/api/`;
  }*/

  constructor(private http: HttpClient) {
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = `https://web-botniks-incident.herokuapp.com/`;
  }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + 'incident');
  }

  getIncident(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'incident/:id');
  }

  saveIncident(incident: Incident): Observable<Incident> {
    const obj = JSON.stringify(incident);
    console.log(obj);
    return this.http.post<Incident>(
      this.baseUrl + 'incident/add',
      obj,
      this.httpOptions
    );
  }

  updateIncident(incident: Incident): Observable<Incident> {
    //const obj = JSON.stringify(incident);
    console.log(incident);
    return this.http.post<Incident>(
      `${this.baseUrl}incident/edit/${incident.incidentID}`,
      incident,
      this.httpOptions
    );
  }

  deleteIncident(id: string): Observable<Incident> {
    //this.loadToken();

    console.log(id);

    return this.http.get<Incident>(
      `${this.baseUrl}incident/delete/${id}`,
      this.httpOptions
    );
  }

  /* authenticate(user: User): Observable<any> {
  deleteIncident(id: string): Observable<Incident>
  {
    //this.loadToken();

    console.log(id);

    return this.http.get<Incident>(`${this.baseUrl}incident/delete/${id}`, this.httpOptions);
  }


 /* authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(): Observable<any> {
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }*/
}
