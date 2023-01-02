import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RecentlySearchedHeroService {

  private readonly heroesStream = new BehaviorSubject<ReadonlyArray<string>>(this.getHeroesFromLocalStorage());

  public get heroes$(): Observable<ReadonlyArray<string>> {
    return this.heroesStream.asObservable();
  }

  public get heroes() {
    return this.heroesStream.value;
  }

  public set heroes(heroes: ReadonlyArray<string>) {
    this.heroesStream.next(heroes);
  }

  public addHeroToLocalStorage(heroName: string): void {
    const oldState = this.getHeroesFromLocalStorage();
    const newState = new Set([heroName, ...oldState]);
    localStorage.setItem('recently-searched', JSON.stringify([...newState]));
  }

  public getHeroesFromLocalStorage(): ReadonlyArray<string> {
    return JSON.parse(localStorage.getItem('recently-searched') || '[]');
  }
}
