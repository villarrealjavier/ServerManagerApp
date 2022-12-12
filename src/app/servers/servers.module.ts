import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteseversComponent } from './componentesevers/componentesevers.component';



@NgModule({
  declarations: [
    ComponenteseversComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ComponenteseversComponent
  ]
})
export class ServersModule { }
