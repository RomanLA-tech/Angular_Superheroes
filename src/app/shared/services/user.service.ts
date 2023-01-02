import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Hero } from '@interfaces/hero.interface';

@Injectable({providedIn: 'root'})
export class UsersService {

  private readonly userHeroesStream = new BehaviorSubject<ReadonlyArray<Hero>>(this.getUserHeroesFromLocalStorage());

  public get userHeroes$(): Observable<ReadonlyArray<Hero>> {
    return this.userHeroesStream.asObservable();
  }

  public get userHeroes(): ReadonlyArray<Hero> {
    return this.userHeroesStream.value;
  }

  public set userHeroes(heroes: ReadonlyArray<Hero>) {
    this.userHeroesStream.next(heroes);
  }

  public getUserHeroesFromLocalStorage(): ReadonlyArray<Hero> {
    return JSON.parse(localStorage.getItem('heroes') || '[]');
  }

  public addUserHeroToLocalStorage(hero: Readonly<Hero>): void {
    const oldState = this.getUserHeroesFromLocalStorage();
    if (oldState.find((item) => item.id === hero.id)) {
      return;
    }
    const newState = new Set([hero, ...oldState]);
    return localStorage.setItem('heroes', JSON.stringify([...newState]));
  }
}
