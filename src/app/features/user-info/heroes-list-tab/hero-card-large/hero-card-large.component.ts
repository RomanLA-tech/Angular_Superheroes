import { Component, Input } from '@angular/core';
import { Hero } from '@interfaces/hero.interface';

@Component({
  selector: 'app-hero-card-large',
  templateUrl: './hero-card-large.component.html',
  styleUrls: ['./hero-card-large.component.scss']
})
export class HeroCardLargeComponent {

  @Input() public hero: Readonly<Hero>;

}
