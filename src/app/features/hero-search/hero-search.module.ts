import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './hero-search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchFormComponent } from './search-form/search-form.component';
import { AlphabetSelectionComponent } from './alphabet-selection/alphabet-selection.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

@NgModule({
  declarations: [
    HeroSearchComponent,
    SearchFormComponent,
    AlphabetSelectionComponent,
    HeroCardComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: HeroSearchComponent
    }
    ])
  ]
})
export class HeroSearchModule {
}
