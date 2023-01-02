import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService,
              private readonly router: Router) {
  }

  canActivate(route: Readonly<ActivatedRouteSnapshot>): boolean {
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
