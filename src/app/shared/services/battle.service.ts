import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Battle, BattleProps, BattleResult } from '@interfaces/battle.interface';
import { Hero, Powerstats } from '@interfaces/hero.interface';
import { PowerUp } from '@interfaces/power-up.interface';

@Injectable({providedIn: 'root'})
export class BattleService {

  private readonly battlesStream = new BehaviorSubject<ReadonlyArray<Battle>>(
    this.getBattlesFromLocalStorage());

  public get battles$(): Observable<ReadonlyArray<Battle>> {
    return this.battlesStream.asObservable();
  }

  public get battles(): ReadonlyArray<Battle> {
    return this.battlesStream.value;
  }

  public set battles(battlesArr: ReadonlyArray<Battle>) {
    this.battlesStream.next(battlesArr);
  }

  public startNewBattle(props: BattleProps): Readonly<BattleResult> {
    const result = this.getBattleResult(props);
    const battle: Battle = {
      date: new Date(Date.now()),
      hero: props.userHero.name,
      opponent: props.opponentHero.name,
      result
    };
    this.addBattleToLocalStorage(battle);
    this.battles = this.getBattlesFromLocalStorage();
    return result;
  }

  public getHeroWithPowerUp(hero: Readonly<Hero>, powerUp: Readonly<PowerUp>): Readonly<Hero> {
    const heroCopy: Hero = JSON.parse(JSON.stringify(hero));
    const powerStatName: keyof Powerstats = powerUp.powerStatsName;
    heroCopy.powerstats[powerStatName] = String(
      (+heroCopy.powerstats[powerStatName]) + (+powerUp.powerStatsValue));
    return heroCopy;
  }

  private getBattleResult(props: BattleProps): Readonly<BattleResult> {
    const userStatsSum = this.getPowerStatsSum(props.userHero);
    const opponentStatsSum = this.getPowerStatsSum(props.opponentHero);
    if (userStatsSum === opponentStatsSum) return 'DRAW';
    return (userStatsSum > opponentStatsSum) ? 'WIN' : 'LOSE';
  }

  private addBattleToLocalStorage(battle: Readonly<Battle>): void {
    const oldState = this.getBattlesFromLocalStorage();
    const newState = [battle, ...oldState];
    localStorage.setItem('battles', JSON.stringify([...newState]));
  }

  private getBattlesFromLocalStorage(): ReadonlyArray<Battle> {
    return JSON.parse(localStorage.getItem('battles') || '[]');
  }

  private getPowerStatsSum(hero: Readonly<Hero>): Readonly<number> {
    return Array.from(Object.values(hero.powerstats)).reduce((acc, cur) => Number(acc) + Number(cur));
  }
}
