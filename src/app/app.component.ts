import { Observable, of } from 'rxjs';
import { UsersService, User } from './services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

class Coord {
  constructor(public x: number, public y: number) {

  }
}
interface IMyIterator<T extends Array<any>> {
  next(): T;
}
class Iterator<T extends Array<any>> implements IMyIterator<T> {
  private _current = 0;
  private _coords = [];
  constructor(arr: T) {
    this._coords = arr;
  }
  next(): T  {
    if (!this._coords.length) {
      return null;
    }
   // if (this._hasNext()) {
    return this._coords[this._current++];
   // }
  }
  hasNext(): boolean {
    return this._current < this._coords.length;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'iptest';

  constructor(
    private _us: UsersService
  ) { }

  ngOnInit(): void {
    const coords = [
      new Coord(10, 10),
      new Coord(20, 20),
      new Coord(30, 30),
    ];

    const iter = new Iterator(coords);
    while(iter.hasNext()){
      console.log(iter.next());

    }
   
  }
}