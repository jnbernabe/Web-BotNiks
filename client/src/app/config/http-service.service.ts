import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Incident } from '../model/incident.model';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  baseUrl: string;
  // authToken: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    }),
  };

  constructor(private http: HttpClient) {
    {
      //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
      this.baseUrl = `https://web-botniks-incident.herokuapp.com/`;
    }
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customer');
  }

  get(incidentID: string) {
    const getOptions = {
      params: {
        incidentID,
      },
    };
    return this.http
      .get<JSON>('http://localhost:3000/create-incident/', getOptions)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }

  // private url =
  //   'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  // postId: any;

  // constructor(private http: HttpClient) {}

  // getPosts() {
  //   return this.http.get(this.url);
  // }
  // sendPosts(obj: any) {
  //   this.http
  //     .post<any>('https://reqres.in/api/posts', {
  //       title: 'Angular POST Request Example',
  //     })
  //     .subscribe((data) => {
  //       this.postId = data.id;
  //     });
  // }
}
