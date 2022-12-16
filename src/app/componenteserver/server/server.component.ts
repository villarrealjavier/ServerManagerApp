import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // onEdit() {
  //   this.router.navigate(['edit'], {relativeTo: this.router})
  // }

}
