import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '@interfaces/hero.interface';

@Component({
  selector: 'app-hero-card-large',
  templateUrl: './hero-card-large.component.html',
  styleUrls: ['./hero-card-large.component.scss']
})
export class HeroCardLargeComponent {

  @Input() public hero: Readonly<Hero>;
  @Input() public selectedHero: Readonly<Hero>;
  @Output() public heroSelected = new EventEmitter<Hero>();

  public setSelectedHero(): void {
    this.heroSelected.emit(this.hero);
  }
}
