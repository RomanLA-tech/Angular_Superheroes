import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PowerUp } from '@interfaces/power-up.interface';

@Component({
  selector: 'app-power-up-card',
  templateUrl: './power-up-card.component.html',
  styleUrls: ['./power-up-card.component.scss']
})
export class PowerUpCardComponent {

  @Input() powerUp: Readonly<PowerUp>;
  @Input() activePowerUp: Readonly<PowerUp>;
  @Output() public powerUpSelected = new EventEmitter<PowerUp>();

  public setSelectedPowerUp() {
    this.powerUpSelected.emit(this.powerUp);
  }
}
