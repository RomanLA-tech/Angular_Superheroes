import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { BattleComponent } from './battle.component';
import { BattleModalComponent } from './battle-modal/battle-modal.component';

@NgModule({
  declarations: [
    BattleComponent,
    BattleModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: BattleComponent
    }
    ]),
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class BattleModule {
}
