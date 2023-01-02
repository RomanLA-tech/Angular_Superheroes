import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  public isAuth$: Observable<Readonly<boolean>>;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) {
  }

  public ngOnInit(): void {
    this.isAuth$ = this.authService.isLogged$;
  }

  public logout() {
    if (this.authService.isLogged) {
      this.authService.isLogged = false;
      this.authService.logout();
      this.router.navigate(['login']);
    }
    return;
  }

}
