import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class User {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  constructor({ name, age, email }) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users$ = new ReplaySubject<User[]>(1);
  constructor() {

  }
  queryUsers(): Observable<User[]> {
    return new Observable(o => {
      setTimeout(() => {
        const users = [
          new User({ name: 'userOne', email: 'eee@ll.cjk', age: 22 }),
          new User({ name: 'userTwo', email: 'rtyr@ll.cjk', age: 23 }),
          new User({ name: 'user3333', email: 'jhk@ll.ert', age: 34 }),
        ];
        o.next(users);
        o.complete();
        this._users$.next(users);
      }, 200);
    });
  }
  get users(): Observable<User[]> {
    return this._users$.asObservable();
  }
  getField(key: string): Observable<string> {
    return this._users$
      .pipe(
        map(users => {
          const user = users.find(u => u.name === key);
          if (user) {
            return user.name;
          }
          return '';
        })
      )
  }


}
