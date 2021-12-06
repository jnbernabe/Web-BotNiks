/*
Created by: Han Bi
User Repository
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

import { User } from './user.model';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor(private dataSource: RestDataSource) {
    dataSource.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    return this.users.find((i) => i.userID === id)!;
  }

  saveUser(savedUser: User): Observable<User> {
    return this.dataSource.updateUser(savedUser);
  }

  waitForData(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      if (this.users.length == 0) {
        this.dataSource.getUsers().subscribe((data) => {
          this.users = data;
          resolve(this.users);
        });
      } else {
        resolve(this.users);
      }
    });
  }
}
