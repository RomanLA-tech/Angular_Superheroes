import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HeroesListTabComponent } from './heroes-list-tab/heroes-list-tab.component';
import { HistoryTabComponent } from './history-tab/history-tab.component';
import { PowerUpsTabComponent } from './power-ups-tab/power-ups-tab.component';
import { HeroCardLargeComponent } from './heroes-list-tab/hero-card-large/hero-card-large.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UserInfoComponent,
    HeroesListTabComponent,
    HistoryTabComponent,
    PowerUpsTabComponent,
    HeroCardLargeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: UserInfoComponent
    }
    ]),
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UserInfoModule {
}
