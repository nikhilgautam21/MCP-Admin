import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (localStorage.hasOwnProperty('x-auth-token')) {
      this.router.navigate(['/dashboard'])
      return false;
    } else {
      return true;
    }
  }
}
