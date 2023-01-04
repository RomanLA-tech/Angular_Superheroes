import { Battle } from '@interfaces/battle.interface';
import { PowerUp } from '@interfaces/power-up.interface';

export const ALPHABET_ARR: ReadonlyArray<string> = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y',
  'Z'];

export const BATTLES_MOCK: Battle[] = [{
  date: new Date(Date.now() + 10000), hero: 'Batman', opponent: 'Joker', result: 'WIN'
}, {
  date: new Date(Date.now()), hero: 'Hulk', opponent: 'Robin', result: 'LOSE'
}
];

export const POWER_UPS_ARR: ReadonlyArray<PowerUp> = [
  {
    title: 'Captain America shield',
    powerStatsName: 'durability',
    powerStatsValue: '10',
    usesLeft: 5,
    image: 'https://halushkovdmytro.github.io/JSON-api/powerups/1.jpg',
    selected: false
  },
  {
    title: 'Mjolnir',
    powerStatsName: 'power',
    powerStatsValue: '10',
    usesLeft: 5,
    image: 'https://halushkovdmytro.github.io/JSON-api/powerups/2.jpg',
    selected: false
  },
  {
    title: 'Ironman nano armor',
    powerStatsName: 'combat',
    powerStatsValue: '10',
    usesLeft: 5,
    image: 'https://halushkovdmytro.github.io/JSON-api/powerups/3.jpg',
    selected: false
  },
  {
    title: 'Dr. Strange\'s cloak',
    powerStatsName: 'intelligence',
    powerStatsValue: '10',
    usesLeft: 5,
    image: 'https://halushkovdmytro.github.io/JSON-api/powerups/4.png',
    selected: false
  },
  {
    title: 'Green lantern\'s ring',
    powerStatsName: 'strength',
    powerStatsValue: '10',
    usesLeft: 5,
    image: 'https://halushkovdmytro.github.io/JSON-api/powerups/5.jpg',
    selected: false
  },
  {
    title: 'Flash boots',
    powerStatsName: 'speed',
    powerStatsValue: '10',
    usesLeft: 5,
    image: 'https://halushkovdmytro.github.io/JSON-api/powerups/6.jpg',
    selected: false
  }
];
