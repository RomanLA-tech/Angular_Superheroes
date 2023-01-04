import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { RouterModule } from '@angular/router';
import { HeroesListTabComponent } from './heroes-list-tab/heroes-list-tab.component';
import { HistoryTabComponent } from './history-tab/history-tab.component';
import { PowerUpsTabComponent } from './power-ups-tab/power-ups-tab.component';
import { HeroCardLargeComponent } from './heroes-list-tab/hero-card-large/hero-card-large.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PowerUpCardComponent } from './power-ups-tab/power-up-card/power-up-card.component';

@NgModule({
  declarations: [
    UserInfoComponent,
    HeroesListTabComponent,
    HistoryTabComponent,
    PowerUpsTabComponent,
    HeroCardLargeComponent,
    PowerUpCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: UserInfoComponent
    }
    ]),
    CdkTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule
  ]
})
export class UserInfoModule {
}
