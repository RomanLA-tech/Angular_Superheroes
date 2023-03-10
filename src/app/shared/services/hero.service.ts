import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Hero } from '@interfaces/hero.interface';
import { HeroesDbResponse } from '@services/interfaces';

@Injectable({providedIn: 'root'})
export class HeroService {

  constructor(private readonly http: HttpClient) {
  }

  public getHeroes(): Observable<ReadonlyArray<Hero>> {
    return this.http.get<Readonly<HeroesDbResponse>>(this.getDbUrl())
      .pipe(map((response) => response.results));
  }

  private getDbUrl(): Readonly<string> {
    return `https://halushkovdmytro.github.io/JSON-api/fake-data.json`;
  }
}
