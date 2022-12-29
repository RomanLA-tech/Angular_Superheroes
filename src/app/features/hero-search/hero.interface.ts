export interface Hero {
  id: Readonly<string>;
  name: Readonly<string>;
  image: Readonly<string>;
  powerstats: {
    intelligence: Readonly<string>;
    strength: Readonly<string>;
    speed: Readonly<string>;
    durability: Readonly<string>;
    power: Readonly<string>;
    combat: Readonly<string>;
  };
  biography: {
    'full-name': Readonly<string>;
    'alter-egos': Readonly<string>;
    'place-of-birth': Readonly<string>;
    alignment: Readonly<string>;
  };
  appearance: {
    gender: Readonly<string>;
    race: Readonly<string>;
    height: Readonly<string>;
    weight: Readonly<string>;
  };
  work: {
    occupations: Readonly<string>;
    base: Readonly<string>;
  };
  connections: {
    relatives: ReadonlyArray<string> | Readonly<string>;
    'group-affiliation': Readonly<string>;
  };
}

