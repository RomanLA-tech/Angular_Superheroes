import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeroSearchComponent } from './hero-search.component';
import { AlphabetSelectionComponent } from './alphabet-selection/alphabet-selection.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { SearchFormInputComponent } from './search-form/search-form-input/search-form-input.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { RecentlySearchedHeroService } from '@services/recently-searched-hero.service';
import { SearchHeroPipe } from '@pipes/search-hero.pipe';

@NgModule({
  declarations: [
    HeroSearchComponent,
    AlphabetSelectionComponent,
    HeroCardComponent,
    SearchHeroPipe,
    SearchFormInputComponent,
    SearchFormComponent,
    RecentSearchesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: HeroSearchComponent
    }
    ])
  ],
  providers: [RecentlySearchedHeroService]
})
export class HeroSearchModule {
}
