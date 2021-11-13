import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private url =
    'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

  postId: any;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }
  sendPosts() {
    this.http
      .post<any>('https://reqres.in/api/posts', {
        title: 'Angular POST Request Example',
      })
      .subscribe((data) => {
        this.postId = data.id;
      });
  }
}
