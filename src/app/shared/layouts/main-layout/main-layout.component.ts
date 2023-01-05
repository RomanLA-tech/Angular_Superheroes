import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { Hero } from '@interfaces/hero.interface';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public isAuth$: Observable<Readonly<boolean>> = this.authService.isLogged$;
  public userHeroes$: Observable<ReadonlyArray<Hero>> = this.userService.userHeroes$;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly authService: AuthService) {
  }

  public logout(): void {
    if (this.authService.isLogged) {
      this.authService.isLogged = false;
      this.authService.logout();
      this.router.navigate(['login']);
    }
    return;
  }

}
