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
  canActivate():  boolean {  
    return true; 
      /*if(this.auth.isLoggedIn()){
=======
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
>>>>>>> 67c00af8dd438cc629bf8eeb33f9230c94354208
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
<<<<<<< HEAD
      }*/
=======
>>>>>>> 67c00af8dd438cc629bf8eeb33f9230c94354208
    }
  }
}
