import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { ServersModule } from './servers/servers.module';
import { UsersModule } from './users/users.module';
import {  HttpClientModule } from '@angular/common/http';
import { EditServerComponent } from './edit-server/edit-server.component';
import { RouterModule } from '@angular/router';
import { ServiceService } from './services/service.service';
import { AuthService } from './authService.service';
import { AuthGuard } from './auth-guard.service';
import { ServerComponent } from './componenteserver/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServersModule,
    UsersModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [ServiceService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
