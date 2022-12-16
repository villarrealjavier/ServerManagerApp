import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteseversComponent } from './componentesevers/componentesevers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ComponenteseversComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports:[
    ComponenteseversComponent
  ]
})
export class ServersModule { }
