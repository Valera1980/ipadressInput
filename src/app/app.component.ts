import { Observable, of } from 'rxjs';
import { UsersService, User } from './services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

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
   
  }
}