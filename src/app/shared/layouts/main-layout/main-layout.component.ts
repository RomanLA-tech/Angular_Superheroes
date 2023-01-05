import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { Hero } from '@interfaces/hero.interface';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  public isAuth$: Observable<Readonly<boolean>> = this.authService.isLogged$;
  public userHeroesArrLength: Readonly<number>;
  private userHeroes$: Observable<ReadonlyArray<Hero>> = this.userService.userHeroes$;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly authService: AuthService) {
  }

  public ngOnInit(): void {
    this.getHeroesArrLength();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public logout(): void {
    if (this.authService.isLogged) {
      this.authService.isLogged = false;
      this.authService.logout();
      this.router.navigate(['login']);
    }
    return;
  }

  private getHeroesArrLength(): void {
    this.userHeroes$.pipe(takeUntil(this.destroy$))
      .subscribe((heroesArr) => {
        this.userHeroesArrLength = heroesArr.length;
      });
  }
}
