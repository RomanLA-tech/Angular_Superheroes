import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '@interfaces/hero.interface';

@Pipe({
  name: 'searchHero'
})
export class SearchHeroPipe implements PipeTransform {

  public transform(heroes: ReadonlyArray<Hero>, search: Readonly<string> = ''): ReadonlyArray<Hero> {
    if (!search.trim()) {
      return heroes;
    }
    return heroes.filter(hero => {
      return hero.name.toLowerCase().includes(search.toLowerCase());
    });
  }

}
