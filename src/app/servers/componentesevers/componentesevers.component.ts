import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-componentesevers',
  templateUrl: './componentesevers.component.html',
  styleUrls: ['./componentesevers.component.css']
})
export class ComponenteseversComponent implements OnInit {

  
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
   obtenerServicdores(){
    return this.service.servers
  }

}
