import { Hero } from '@interfaces/hero.interface';

export interface BattleModalData {
  resultMessage: Readonly<string>;
  userHero: Readonly<Hero>;
}
