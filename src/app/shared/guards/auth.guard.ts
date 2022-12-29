import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService,
              private readonly router: Router) {
  }

  canActivate(
    route: Readonly<ActivatedRouteSnapshot>,
    state: Readonly<RouterStateSnapshot>): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.auth.logout();
    this.router.navigate(['', 'login'], {
      queryParams: {
        authExpired: true
      }
    });
    return false;
  }
}
