import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { RecentlySearchedHeroService } from '@services/recently-searched-hero.service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit {

  @Output() public heroSelected: EventEmitter<string> = new EventEmitter<string>();

  public recentSearches$: Observable<ReadonlyArray<string>>;

  constructor(
    private readonly recentlySearchedService: RecentlySearchedHeroService) {
  }

  public ngOnInit(): void {
    this.recentSearches$ = this.recentlySearchedService.heroes$;
  }

  public recentHeroSelected(heroName: Readonly<string>): void {
    this.heroSelected.emit(heroName);
  }

}
