import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';
import { UserComponent } from './componentesusers/user/user.component';



@NgModule({
  declarations: [
  
    ComponentesusersComponent,
       UserComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ComponentesusersComponent
  ]
})
export class UsersModule { }
