import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '@services/hero.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Hero } from '@interfaces/hero.interface';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent implements OnInit, OnDestroy {

  public heroId: Readonly<string> = this.route.snapshot.paramMap.get('id')!;
  public selectedHeroId$: Observable<Readonly<string>>;
  public hero: Readonly<Hero>;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly heroService: HeroService,
    private readonly userService: UserService,
    private readonly route: ActivatedRoute
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
    this.userService.userSelectedHeroId = this.hero.id;
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
