import { Battle } from '@interfaces/battle.interface';

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
