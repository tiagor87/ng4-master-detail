import { SingleUserListChanged } from './user.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export interface SingleUserListChanged {
  index: number;
  user: User;
}

export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'User 1',
      email: 'user@email.com',
      urlProfileImage:
        'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg'
    },
    {
      id: 2,
      name: 'User 2',
      email: 'user2@email.com',
      urlProfileImage:
        'https://www.xing.com/assets/frontend_minified/img/users/nobody_f.1024x1024.jpg'
    }
  ];

  usersListChanged = new Subject<User[]>();
  beginEdit = new Subject<void>();
  finishEdit = new Subject<void>();
  singleUserListChanged = new Subject<SingleUserListChanged>();

  getAll() {
    return this.users.slice();
  }

  getById(id: number) {
    return this.users[id - 1];
  }

  update(id: number, userData: any) {
    const user = Object.assign(this.getById(id), userData);
    this.users.splice(id - 1, 1, user);
    this.singleUserListChanged.next({
      index: id - 1,
      user: user
    });
  }

  insert(user: User) {
    this.users.push(user);
    user.id = this.users.length;
    this.singleUserListChanged.next({
      index: this.users.length - 1,
      user: user
    });
  }
}
