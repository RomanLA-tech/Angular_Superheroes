import { Component, DoCheck } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements DoCheck {

  public isAuth = false;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) {
  }

  ngDoCheck(): void {
    this.checkIsAuth();
  }

  public logout() {
    if (this.isAuth) {
      this.isAuth = false;
      this.authService.logout();
      this.router.navigate(['login']);
    }
    return;
  }

  private checkIsAuth() {
    if (this.authService.isAuthenticated()) {
      this.isAuth = true;
    }
  }
}
