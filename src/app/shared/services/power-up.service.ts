import { Injectable } from '@angular/core';
import { PowerUp } from '@interfaces/power-up.interface';
import { POWER_UPS_ARR } from '@utils/constants';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerUpService {

  private readonly activePowerUpStream = new BehaviorSubject<Readonly<PowerUp>>
  (this.getPowerUpsFromLocalStorage()[0] || {} as PowerUp);

  public get activePowerUp$(): Observable<Readonly<PowerUp>> {
    return this.activePowerUpStream.asObservable();
  }

  public get activePowerUp(): Readonly<PowerUp> {
    return this.activePowerUpStream.value;
  }

  public set activePowerUp(powerUp: Readonly<PowerUp>) {
    this.activePowerUpStream.next(powerUp);
  }

  public initPowerUp(): ReadonlyArray<PowerUp> {
    return POWER_UPS_ARR;
  }

  public savePowerUpToLocalStorage(): void {
    localStorage.setItem('powerUps', JSON.stringify(this.initPowerUp()));
  }

  public getPowerUpsFromLocalStorage(): ReadonlyArray<PowerUp> {
    return JSON.parse(localStorage.getItem('powerUps') || '[]');
  }
}
