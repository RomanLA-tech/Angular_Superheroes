export interface PowerUp {
  title: Readonly<string>;
  powerStatsName: Readonly<string>;
  powerStatsValue: Readonly<string>;
  usesLeft: Readonly<number>;
  image: Readonly<string>;
  selected: Readonly<boolean>;
}
