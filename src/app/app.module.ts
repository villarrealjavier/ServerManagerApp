import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { ServersModule } from './servers/servers.module';
import { UsersModule } from './users/users.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServersModule,
    UsersModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
