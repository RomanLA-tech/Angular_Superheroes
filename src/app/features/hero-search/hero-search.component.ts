import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Hero } from '@shared/interfaces/hero.interface';
import { HeroService } from '@services/hero.service';
import { SearchForm } from '@interfaces/hero-search-form.interface';
import { RecentlySearchedHeroService } from '@services/recently-searched-hero.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit, OnDestroy {

  public selectedHeroId$: Observable<Readonly<string>>;
  public heroes: ReadonlyArray<Hero>;
  public searchForm: FormGroup<SearchForm>;
  public searchValue: Readonly<string>;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly heroService: HeroService,
    private readonly recentlySearchedService: RecentlySearchedHeroService,
    private readonly userService: UserService
  ) {
  }

  public ngOnInit(): void {
    this.selectedHeroIdInit();
    this.searchFormInit();
    this.getHeroes();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public selectLetter(letter: Readonly<string>): void {
    this.searchForm.controls.searchField.setValue(letter);
    this.searchValue = this.searchForm.controls.searchField.value;
  }

  public selectHero(hero: Readonly<Hero>): void {
    this.userService.userSelectedHeroId = hero.id;
    this.userService.addUserHeroToLocalStorage(hero);
    this.userService.userHeroes = this.userService.getUserHeroesFromLocalStorage();
  }

  public onRecentHeroSelect(heroName: Readonly<string>): void {
    this.searchForm.controls.searchField.setValue(heroName);
  }

  public onSubmit(): void {
    if (this.searchForm.invalid) {
      return;
    }
    const searchValue = this.searchForm.controls.searchField.getRawValue();
    this.searchValue = searchValue;
    this.getHeroes();
    this.addToRecentSearches(searchValue);
  }

  private selectedHeroIdInit(): void {
    this.selectedHeroId$ = this.userService.userSelectedHeroId$;
  }

  private getHeroes(): void {
    this.heroService.getHeroes().pipe(takeUntil(this.destroy$))
      .subscribe((heroes) => this.heroes = heroes
      );
  }

  private addToRecentSearches(searchValue: Readonly<string>): void {
    this.recentlySearchedService.addHeroToLocalStorage(searchValue);
    this.recentlySearchedService.heroes = this.recentlySearchedService.getHeroesFromLocalStorage();
  }

  private searchFormInit(): void {
    this.searchForm = new FormGroup<SearchForm>({
      searchField: new FormControl<string>('', {
        nonNullable: true, validators: [Validators.required,
          Validators.pattern('[a-zA-Z]*'),
          Validators.maxLength(20)]
      })
    });
  }
}
