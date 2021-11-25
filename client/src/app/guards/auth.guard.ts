import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../app/services/auth/auth.service';
import { Router } from '@angular/router';
import { CreateIncidentComponent } from '../create-incident/create-incident.component';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
<<<<<<< HEAD
  
  constructor(private auth: AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
 
   boolean {
      
      if(!this.auth.isLoggedIn()){
       // this.router.navigate(['Login']);
        return false;
      }
      return this.auth.isLoggedIn();
=======
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
>>>>>>> 6c814051201453c8c5b363027e73434510afeae6
    }
    return this.auth.isLoggedIn();
  }
}
