import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '@shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent {

  @Input() public hero: Readonly<Hero>;
  @Input() public selectedHeroId: Readonly<string>;
  @Output() public heroSelected = new EventEmitter<string>();

  public setSelectedHero() {
    this.heroSelected.emit(this.hero.id);
  }
}

