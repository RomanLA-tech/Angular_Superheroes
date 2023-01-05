import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PowerUpService } from '@services/power-up.service';
import { PowerUp } from '@interfaces/power-up.interface';

@Component({
  selector: 'app-power-ups-tab',
  templateUrl: './power-ups-tab.component.html',
  styleUrls: ['./power-ups-tab.component.scss']
})
export class PowerUpsTabComponent implements OnInit {

  public activePowerUp$: Observable<Readonly<PowerUp>> = this.powerUpService.activePowerUp$;
  public powerUpsList: ReadonlyArray<PowerUp>;
  public sortedPowerUpsList: ReadonlyArray<PowerUp>;

  constructor(private readonly powerUpService: PowerUpService) {
  }

  public ngOnInit(): void {
    this.powerUpsListInit();
    this.getSortedPowerUpsArr();
  }

  public trackByTitle(index: number, powerUp: Readonly<PowerUp>): string {
    return powerUp.title;
  }

  public onSetActivePowerUp(powerUp: Readonly<PowerUp>): void {
    this.powerUpService.activePowerUp = powerUp;
  }

  private powerUpsListInit(): void {
    this.powerUpsList = this.powerUpService.getPowerUpsFromLocalStorage();
  }

  private getSortedPowerUpsArr(): void {
    this.sortedPowerUpsList = [...this.powerUpsList]
      .sort((a, b) => {
        return b.usesLeft - a.usesLeft;
      });
  }
}
