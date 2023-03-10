import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeroInfoComponent } from './hero-info.component';

@NgModule({
  declarations: [
    HeroInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HeroInfoComponent
    }
    ]),
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class HeroInfoModule {
}
