import { Powerstats } from '@interfaces/hero.interface';

export interface PowerUp {
  title: Readonly<string>;
  powerStatsName: Readonly<keyof Powerstats>;
  powerStatsValue: Readonly<string>;
  usesLeft: Readonly<number>;
  image: Readonly<string>;
  selected: Readonly<boolean>;
}
