import { Hero } from '@shared/interfaces/hero.interface';

export interface User {
  email: Readonly<string>;
  password: Readonly<string>;
  username: Readonly<string>;
}

export interface HeroesDbResponse {
  response: Readonly<string>;
  results: ReadonlyArray<Hero>;
}
