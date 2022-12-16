import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Users } from '../../../interfaces/users.interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!:Users;
  constructor(private route: ActivatedRoute, private service:ServiceService) { 

  }

  ngOnInit(): void {
    this.service.getUsers(this.route.snapshot.params['id'])
    .subscribe({
      next: (resp)=> this.user=resp
    })
  }

}
