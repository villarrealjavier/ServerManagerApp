import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesusersComponent } from './componentesusers/componentesusers.component';



@NgModule({
  declarations: [
  
    ComponentesusersComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ComponentesusersComponent
  ]
})
export class UsersModule { }
