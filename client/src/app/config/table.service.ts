import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

const PROTOCOL = 'http';
const PORT = 3000;
@Injectable({
  providedIn: 'root',
})
export class TableService {
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
    //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = `https://web-botniks-incident.herokuapp.com/`;
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customer');
  }

  getUser(id: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + `customer/edit/${id}`);
  }

  postUser(customer: Customer): Observable<any> {
    const body = JSON.stringify(customer);
    console.log(body);
    return this.http.post(
      this.baseUrl + 'customer/add',
      body,
      this.httpOptions
    );
  }

  postEditUser(customer: Customer): Observable<any> {
    const body = JSON.stringify(customer);
    console.log(body);
    return this.http.post(
      this.baseUrl + `customer/edit/${customer.customerId}`,
      body,
      this.httpOptions
    );
  }
}
