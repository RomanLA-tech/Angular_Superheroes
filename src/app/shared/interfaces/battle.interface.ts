import { Hero } from '@interfaces/hero.interface';

export type BattleResult = 'WIN' | 'LOSE' | 'DRAW'

export interface Battle {
  date: Readonly<Date>;
  hero: Readonly<string>;
  opponent: Readonly<string>;
  result: Readonly<BattleResult>;
}

export interface BattleProps {
  userHero: Readonly<Hero>;
  opponentHero: Readonly<Hero>;
}
