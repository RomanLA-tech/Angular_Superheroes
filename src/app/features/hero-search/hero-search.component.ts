import { Component, OnInit } from '@angular/core';

import { Hero } from '@shared/interfaces/hero.interface';
import { HeroService } from '@services/hero.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchForm } from '@interfaces/hero-search-form.interface';
import { HEROES } from '@utils/constants';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  public recentSearches: Readonly<string[]>;
  public selectedHero: Readonly<string>;
  public heroes: ReadonlyArray<Hero>;
  public searchForm: FormGroup<SearchForm>;

  constructor(private readonly heroService: HeroService) {
  }

  public ngOnInit(): void {
    this.getHeroes();
    this.searchFormInit();
  }

  public search(value: Readonly<string>): void {
  }

  public selectLetter(letter: Readonly<string>): void {
  }

  public selectHero(heroId: Readonly<string>): void {
    this.selectedHero = heroId;
  }

  public onSubmit(): void {
    if (this.searchForm.invalid) {
      return;
    }
    console.log(this.searchForm);
  }

  private getHeroes() {
    this.heroes = HEROES;
  }

  private getRecentSearches(): void {
    this.recentSearches = ['Batman', 'Joker'];
  }

  private addToRecentSearches(search: string): void {
  }

  private searchFormInit(): void {
    this.searchForm = new FormGroup<SearchForm>({
      searchField: new FormControl<string>('', {
        nonNullable: true, validators: [Validators.required,
          Validators.pattern('[a-zA-Z]*'),
          Validators.maxLength(10),
          Validators.minLength(2)]
      })
    });
    this.getRecentSearches();
  }
}
