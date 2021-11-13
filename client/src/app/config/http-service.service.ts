import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('htt').pipe(
      map((response) => {
        return;
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
