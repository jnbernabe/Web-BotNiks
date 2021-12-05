/*
Created by: Han Bi
User Repository
*/

import { Injectable } from '@angular/core';
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

  getUser(id: string): User {
    return this.users.find((i) => i.userID === id)!;
  }

  saveUser(savedUser: User): void {
    this.dataSource.updateUser(savedUser).subscribe((user) => {
      this.users.splice(
        this.users.findIndex((u) => u.userID === savedUser.userID),
        1,
        savedUser
      );
    });
  }
}
