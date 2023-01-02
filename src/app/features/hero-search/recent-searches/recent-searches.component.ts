import { Component, DoCheck, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchForm } from '@interfaces/hero-search-form.interface';
import { RecentlySearchedHeroService } from '@services/recently-searched-hero.service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements DoCheck {

  public recentSearches: ReadonlyArray<string>;

  @Input() form: FormGroup<SearchForm>;

  constructor(
    private readonly recentlySearchedService: RecentlySearchedHeroService) {
  }

  public ngDoCheck() {
    this.getRecentSearches();
  }

  public selectRecentElement(heroName: Readonly<string>): void {
    this.form.controls.searchField.setValue(heroName);
  }
  
  private getRecentSearches(): void {
    this.recentSearches = this.recentlySearchedService.getHeroes();
  }
}
