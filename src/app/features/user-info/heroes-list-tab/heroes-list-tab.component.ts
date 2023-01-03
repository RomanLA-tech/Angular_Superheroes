import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '@interfaces/hero.interface';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-heroes-list-tab',
  templateUrl: './heroes-list-tab.component.html',
  styleUrls: ['./heroes-list-tab.component.scss']
})
export class HeroesListTabComponent implements OnInit {

  public userHeroes$: Observable<ReadonlyArray<Hero>>;

  constructor(private readonly userService: UserService) {
  }

  public ngOnInit(): void {
    this.userHeroes$ = this.userService.userHeroes$;
  }

}
