import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Customer } from '../model/customer.model';
import { Incident } from '../model/incident.model';

const PROTOCOL = 'http';
const PORT = 3000;
@Injectable({
  providedIn: 'root',
})
export class IncidentService {
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
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    this.baseUrl = `https://web-botniks-incident.herokuapp.com/api/`;
  }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + 'incident');
  }

  getIncident(id: string): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + `incident/edit/${id}`);
  }

  postIncident(incident: Incident): Observable<any> {
    const body = JSON.stringify(incident);
    console.log(body);
    return this.http.post(
      this.baseUrl + 'incident/add',
      body,
      this.httpOptions
    );
  }

  postEditIncident(incident: Incident): Observable<any> {
    const body = JSON.stringify(incident);
    console.log(body);
    return this.http.post(
      this.baseUrl + `incident/edit/${incident.incidentID}`,
      body,
      this.httpOptions
    );
  }
}
