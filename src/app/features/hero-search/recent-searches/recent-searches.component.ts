import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecentlySearchedHeroService } from '@services/recently-searched-hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit {

  public recentSearches$: Observable<ReadonlyArray<string>>;
  @Output() heroSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly recentlySearchedService: RecentlySearchedHeroService) {
  }

  public recentHeroSelected(heroName: Readonly<string>): void {
    this.heroSelected.emit(heroName);
  }

  public ngOnInit(): void {
    this.recentSearches$ = this.recentlySearchedService.heroes$;
  }

}
