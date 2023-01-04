import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Battle } from '@interfaces/battle.interface';

@Injectable({providedIn: 'root'})
export class BattleService {

  private readonly battlesStream = new BehaviorSubject<ReadonlyArray<Battle>>([]);

  public get battles$(): Observable<ReadonlyArray<Battle>> {
    return this.battlesStream.asObservable();
  }

  public get battles(): ReadonlyArray<Battle> {
    return this.battlesStream.value;
  }

  public set battles(battlesArr: ReadonlyArray<Battle>) {
    this.battlesStream.next(battlesArr);
  }

  public addBattleToLocalStorage(battle: Readonly<Battle>): void {
    const oldState = this.getBattlesFromLocalStorage();
    const newState = [battle, ...oldState];
    localStorage.setItem('battles', JSON.stringify([...newState]));
  }

  public getBattlesFromLocalStorage(): ReadonlyArray<Battle> {
    return JSON.parse(localStorage.getItem('battles') || '[]');
  }
}
