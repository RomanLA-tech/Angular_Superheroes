type Result = 'WIN' | 'LOSE'

export interface Battle {
  date: Readonly<Date>;
  hero: Readonly<string>;
  opponent: Readonly<string>;
  result: Readonly<Result>;
}
