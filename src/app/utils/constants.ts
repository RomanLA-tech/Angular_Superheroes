import { Hero } from '@shared/interfaces/hero.interface';

export const ALPHABET_ARR: ReadonlyArray<string> = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y',
  'Z'];

export const HEROES: ReadonlyArray<Hero> = [{
  'id': '1',
  'name': 'Batman',
  'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/1.png',
  'powerstats': {
    'intelligence': '100',
    'strength': '75',
    'speed': '70',
    'durability': '80',
    'power': '77',
    'combat': '95'
  },
  'biography': {
    'full-name': 'Bruce Wayne',
    'alter-egos': 'Shmuce Wayne',
    'place-of-birth': 'Gothem',
    'alignment': 'unknown'
  },
  'appearance': {
    'gender': 'Male',
    'race': 'Human',
    'height': 'Tall',
    'weight': 'Fat'
  },
  'work': {
    'occupations': 'Millionaire',
    'base': 'Cave'
  },
  'connections': {
    'relatives': [
      'Alfred',
      'Seline',
      'Robin'
    ],
    'group-affiliation': 'unknown'
  }
},
  {
    'id': '2',
    'name': 'Spider man',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/2.jpg',
    'powerstats': {
      'intelligence': '100',
      'strength': '95',
      'speed': '90',
      'durability': '90',
      'power': '90',
      'combat': '90'
    },
    'biography': {
      'full-name': 'Peter Parker',
      'alter-egos': 'Nerd',
      'place-of-birth': 'New-York',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Human',
      'height': 'Short',
      'weight': 'Fit'
    },
    'work': {
      'occupations': 'Student',
      'base': 'Ant May\'s apartment'
    },
    'connections': {
      'relatives': [
        'Ned',
        'MJ',
        'Ant May'
      ],
      'group-affiliation': 'unknown'
    }
  },
  {
    'id': '3',
    'name': 'Incredible Hulk',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/3.png',
    'powerstats': {
      'intelligence': '10',
      'strength': '100',
      'speed': '50',
      'durability': '100',
      'power': '90',
      'combat': '100'
    },
    'biography': {
      'full-name': 'Bruce Benner',
      'alter-egos': 'Hulk',
      'place-of-birth': 'USA',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Human',
      'height': 'Huge',
      'weight': 'Enormous'
    },
    'work': {
      'occupations': 'Scientist',
      'base': 'Stark industries'
    },
    'connections': {
      'relatives': 'unknown',
      'group-affiliation': 'unknown'
    }
  },
  {
    'id': '4',
    'name': 'Doctor Strange',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/4.png',
    'powerstats': {
      'intelligence': '100',
      'strength': '50',
      'speed': '70',
      'durability': '100',
      'power': '100',
      'combat': '70'
    },
    'biography': {
      'full-name': 'Steven Strange',
      'alter-egos': 'Evil Strange',
      'place-of-birth': 'New-York',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Human',
      'height': 'Regular',
      'weight': 'Regular'
    },
    'work': {
      'occupations': 'Neurosurgeon',
      'base': 'Kamartage'
    },
    'connections': {
      'relatives': 'unknown',
      'group-affiliation': 'unknown'
    }
  },
  {
    'id': '5',
    'name': 'Thor',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/5.jpg',
    'powerstats': {
      'intelligence': '80',
      'strength': '100',
      'speed': '90',
      'durability': '90',
      'power': '100',
      'combat': '100'
    },
    'biography': {
      'full-name': 'Thor Odinsson',
      'alter-egos': 'unknown',
      'place-of-birth': 'Asguard',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Asguardian',
      'height': 'Tall',
      'weight': 'Pretty muscle'
    },
    'work': {
      'occupations': 'Prince of Asguard',
      'base': 'Asguard'
    },
    'connections': {
      'relatives': [
        'Odin',
        'Loki'
      ],
      'group-affiliation': 'unknow'
    }
  },
  {
    'id': '6',
    'name': 'Venom',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/6.jpg',
    'powerstats': {
      'intelligence': '40',
      'strength': '90',
      'speed': '80',
      'durability': '90',
      'power': '85',
      'combat': '95'
    },
    'biography': {
      'full-name': 'Eddie Broke',
      'alter-egos': 'unknown',
      'place-of-birth': 'unknown',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Parasite',
      'height': 'Tall',
      'weight': 'Muscle'
    },
    'work': {
      'occupations': 'Chicken brains eater',
      'base': 'Eddie Broke apartment'
    },
    'connections': {
      'relatives': 'Carnage',
      'group-affiliation': 'unknown'
    }
  },
  {
    'id': '7',
    'name': 'Aqua-man',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/7.jpg',
    'powerstats': {
      'intelligence': '75',
      'strength': '90',
      'speed': '87',
      'durability': '88',
      'power': '93',
      'combat': '86'
    },
    'biography': {
      'full-name': 'Jason Mamoa',
      'alter-egos': 'Khal Drogo',
      'place-of-birth': 'unknown',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Human/Atlantidian',
      'height': 'Tall',
      'weight': 'Big'
    },
    'work': {
      'occupations': 'Beer drinker',
      'base': 'Under the sea'
    },
    'connections': {
      'relatives': 'Nicole Kidman',
      'group-affiliation': 'unknown'
    }
  },
  {
    'id': '8',
    'name': 'Captain America',
    'image': 'https://halushkovdmytro.github.io/JSON-api/heroes/8.jpg',
    'powerstats': {
      'intelligence': '93',
      'strength': '88',
      'speed': '85',
      'durability': '91',
      'power': '89',
      'combat': '99'
    },
    'biography': {
      'full-name': 'Steve Rogers',
      'alter-egos': 'Red Skull',
      'place-of-birth': 'Brooklyn',
      'alignment': 'unknown'
    },
    'appearance': {
      'gender': 'Male',
      'race': 'Human',
      'height': 'Tall',
      'weight': 'Strong'
    },
    'work': {
      'occupations': 'Avenger',
      'base': 'Avengers base'
    },
    'connections': {
      'relatives': 'unknown',
      'group-affiliation': 'unknown'
    }
  }
];
