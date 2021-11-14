import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from './incident.model';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseUrl + 'incidents');
  }
}
