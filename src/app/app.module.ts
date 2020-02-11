import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IpformComponent } from './ipform/ipform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AdressItemComponent } from './adress-item/adress-item.component';
import { NgxIpModule } from 'ngx-ip';
import { SwitchWithLogicComponent } from './switch-with-logic/switch-with-logic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    IpformComponent,
    AdressItemComponent,
    SwitchWithLogicComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ReactiveFormsModule,
    NgxIpModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
