import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Hero } from '@interfaces/hero.interface';

@Injectable({providedIn: 'root'})
export class UserService {

  private readonly userSelectedHeroStream = new BehaviorSubject<Readonly<Hero>>(
    this.getUserHeroesFromLocalStorage()[0] || {} as Hero);

  private readonly userHeroesStream = new BehaviorSubject<ReadonlyArray<Hero>>(
    this.getUserHeroesFromLocalStorage());

  public get userSelectedHero$(): Observable<Readonly<Hero>> {
    return this.userSelectedHeroStream.asObservable();
  }

  public get userSelectedHero(): Readonly<Hero> {
    return this.userSelectedHeroStream.value;
  }

  public set userSelectedHero(hero: Readonly<Hero>) {
    this.userSelectedHeroStream.next(hero);
  }

  public get userHeroes$(): Observable<ReadonlyArray<Hero>> {
    return this.userHeroesStream.asObservable();
  }

  public get userHeroes(): ReadonlyArray<Hero> {
    return this.userHeroesStream.value;
  }

  public set userHeroes(heroes: ReadonlyArray<Hero>) {
    this.userHeroesStream.next(heroes);
  }

  public getRandomHero(): Readonly<Hero> {
    const numberOfHeroes = this.userHeroes.length;
    return this.userHeroes[Math.floor(Math.random() * numberOfHeroes)];
  }

  public getUserHeroesFromLocalStorage(): ReadonlyArray<Hero> {
    return JSON.parse(localStorage.getItem('heroes') || '[]');
  }

  public addUserHeroToLocalStorage(hero: Readonly<Hero>): void {
    let oldState = this.getUserHeroesFromLocalStorage();
    if (oldState.find((item) => item.id === hero.id)) {
      oldState = oldState.filter((item) => item.id !== hero.id);
    }
    const newState = [hero, ...oldState];
    localStorage.setItem('heroes', JSON.stringify([...newState]));
  }
}
