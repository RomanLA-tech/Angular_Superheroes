import { Injectable } from '@angular/core';

@Injectable()
export class RecentlySearchedHeroService {

  public addHero(heroName: string): void {
    const oldState = this.getHeroes();
    const newState = new Set([heroName, ...oldState]);
    localStorage.setItem('recently-searched', JSON.stringify([...newState]));
  }

  public getHeroes(): ReadonlyArray<string> {
    return JSON.parse(localStorage.getItem('recently-searched') || '[]');
  }
}
