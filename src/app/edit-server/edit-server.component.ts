import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/server.interfaces';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service:ServiceService,private router:Router) { }

  server!:Server;
  id!:number;
  changesSaved = false;

  // onUpdateServer() {
  //   this.service.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  //   this.changesSaved = true;
  //   this.router.navigate(['../'], {relativeTo: this.route});
  // }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.route.params
    .subscribe({
      next: (resp)=> {this.server=this.service.servidor(resp['id'])[0]}
    })
    
  }

 


  
}
