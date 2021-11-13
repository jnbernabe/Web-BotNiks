import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Incident } from '../model/incident.model';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

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
