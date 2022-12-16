import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }
    onlogin() {
     this.authService.login();
    }
    onlogout() {
      this.authService.logout();
    }

      ngOnInit(): void {
      }

}
