import { Hero } from '@interfaces/hero.interface';

export interface HeroesDbResponse {
  response: Readonly<string>;
  results: ReadonlyArray<Hero>;
}
