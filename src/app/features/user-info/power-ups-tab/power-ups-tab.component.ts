import { Component, OnInit } from '@angular/core';

import { PowerUpService } from '@services/power-up.service';
import { PowerUp } from '@interfaces/power-up.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-power-ups-tab',
  templateUrl: './power-ups-tab.component.html',
  styleUrls: ['./power-ups-tab.component.scss']
})
export class PowerUpsTabComponent implements OnInit {

  public powerUpsList: ReadonlyArray<PowerUp>;
  public sortedPowerUpsList: ReadonlyArray<PowerUp>;
  public activePowerUp$: Observable<Readonly<PowerUp>> = this.powerUpService.activePowerUp$;

  constructor(private readonly powerUpService: PowerUpService) {
  }

  public ngOnInit(): void {
    this.powerUpsListInit();
    this.getSortedPowerUpsArr();
  }

  public trackByTitle(index: number, powerUp: Readonly<PowerUp>): string {
    return powerUp.title;
  }

  public onSetActivePowerUp(powerUp: Readonly<PowerUp>) {
    this.powerUpService.activePowerUp = powerUp;
  }

  private powerUpsListInit(): void {
    this.powerUpService.savePowerUpToLocalStorage();
    this.powerUpsList = this.powerUpService.getPowerUpsFromLocalStorage();
  }

  private getSortedPowerUpsArr(): void {
    this.sortedPowerUpsList = [...this.powerUpsList]
      .sort((a, b) => {
        return b.usesLeft - a.usesLeft;
      });
  }
}
