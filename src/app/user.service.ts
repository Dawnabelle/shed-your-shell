import { Injectable } from '@angular/core';
import { User } from './models/user.model';

let users: User[] = [];

@Injectable()
export class UserService {

  users = users;

  getUser() {
    return this.users;
  }

  pushUser(currentUser: User) {
    return this.users.push(currentUser);
  }

  constructor() { }

}
