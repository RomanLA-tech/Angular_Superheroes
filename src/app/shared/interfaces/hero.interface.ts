export interface Hero {
  id: Readonly<string>;
  name: Readonly<string>;
  image: Readonly<string>;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
}

export interface Powerstats {
  intelligence: Readonly<string>;
  strength: Readonly<string>;
  speed: Readonly<string>;
  durability: Readonly<string>;
  power: Readonly<string>;
  combat: Readonly<string>;
}

export interface Biography {
  'full-name': Readonly<string>;
  'alter-egos': Readonly<string>;
  'place-of-birth': Readonly<string>;
  alignment: Readonly<string>;
}

export interface Appearance {
  gender: Readonly<string>;
  race: Readonly<string>;
  height: Readonly<string>;
  weight: Readonly<string>;
}

export interface Work {
  occupations: Readonly<string>;
  base: Readonly<string>;
}

export interface Connections {
  relatives: ReadonlyArray<string> | Readonly<string>;
  'group-affiliation': Readonly<string>;
}
