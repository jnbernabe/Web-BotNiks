import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 4200;
@Injectable()
export class ConfigService implements OnInit {
  courses$: Observable<Course[]>;

    constructor(private http:HttpClient) {
    }

    ngOnInit() {
        this.courses$ = this.http
            .get<Course[]>("/courses.json")
            .map(data => _.values(data))
            .do(console.log);
}
