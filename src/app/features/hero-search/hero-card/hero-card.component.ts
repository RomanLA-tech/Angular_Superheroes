import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '@features/hero-search/hero.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {

  @Input() hero: Readonly<Hero>;
  @Input() selectedHeroId: Readonly<string>;
  @Output() heroSelectBtnClick = new EventEmitter<string>();

  public setSelectedHero() {
    this.heroSelectBtnClick.emit(this.hero.id);
  }
}

