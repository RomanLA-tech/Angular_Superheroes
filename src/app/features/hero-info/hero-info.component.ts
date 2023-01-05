import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

import { HeroService } from '@services/hero.service';
import { UserService } from '@services/user.service';
import { Hero } from '@interfaces/hero.interface';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent implements OnInit, OnDestroy {

  public selectedHero$: Observable<Readonly<Hero>> = this.userService.userSelectedHero$;
  public heroId: Readonly<string> = this.route.snapshot.paramMap.get('id')!;
  public hero: Readonly<Hero>;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly heroService: HeroService,
    private readonly userService: UserService
  ) {
  }

  public ngOnInit(): void {
    this.getHero();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectHero(): void {
    this.userService.userSelectedHero = this.hero;
    this.userService.addUserHeroToLocalStorage(this.hero);
  }

  private getHero(): void {
    this.heroService.getHeroes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((heroes) => {
          this.hero = heroes.find((hero) => hero.id === this.heroId)!;
        }
      );
  }
}
