import { Component, OnInit } from '@angular/core';

import { Hero } from '@shared/interfaces/hero.interface';
import { HeroService } from '@services/hero.service';
import { HEROES } from '@utils/constants';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  public recentSearches: string[];
  public selectedHero: Readonly<string>;
  public readonly heroes: ReadonlyArray<Hero>;

  constructor(private readonly heroService: HeroService) {
    this.heroes = HEROES;
  }

  ngOnInit(): void {
    this.getRecentSearches();
  }

  public search(value: string): void {
    console.log(value);
  }

  public selectLetter(letter: string): void {
    console.log(letter);
  }

  public selectHero(heroId: string): void {
    this.selectedHero = heroId;
  }

  private getRecentSearches(): void {
    this.recentSearches = ['Batman', 'Joker'];
  }

  private addToRecentSearches(search: string): void {
  }
}
