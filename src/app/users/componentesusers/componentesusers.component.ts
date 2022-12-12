import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Users } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-componentesusers',
  templateUrl: './componentesusers.component.html',
  styleUrls: ['./componentesusers.component.css']
})
export class ComponentesusersComponent implements OnInit {
 
  constructor(private service: ServiceService) { }

  usuarios:Users[]=[]
  error:string=''
  ngOnInit(): void {
    this.service.users()
    .subscribe({
      next: (resp)=> this.usuarios=resp
    })
  }

  
  
}
