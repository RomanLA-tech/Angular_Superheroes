type Result = 'WIN' | 'LOSE'

export interface Battle {
  date: Date;
  hero: string;
  opponent: string;
  result: Result;
}
