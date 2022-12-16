import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './authService.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.auth.isAuthenticated()
      .then(
        (authenticated)=>{
          if(authenticated){
            return true;
          }else{
            this.router.navigate(['/']);
            return false;
          }
        }
      )
  }
  canActivateChild(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
return this.canActivate(route, state);
}
  }
