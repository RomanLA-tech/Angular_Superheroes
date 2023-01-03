import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@interfaces/hero.interface';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-heroes-list-tab',
  templateUrl: './heroes-list-tab.component.html',
  styleUrls: ['./heroes-list-tab.component.scss']
})
export class HeroesListTabComponent {

  public selectedHeroId$: Observable<Readonly<string>> = this.userService.userSelectedHeroId$;
  public userHeroes$: Observable<ReadonlyArray<Hero>> = this.userService.userHeroes$;

  constructor(private readonly userService: UserService) {
  }

  public selectHero(hero: Readonly<Hero>): void {
    this.userService.userSelectedHeroId = hero.id;
  }
}
