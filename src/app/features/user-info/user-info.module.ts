import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HeroesListTabComponent } from './heroes-list-tab/heroes-list-tab.component';
import { HistoryTabComponent } from './history-tab/history-tab.component';
import { PowerUpsTabComponent } from './power-ups-tab/power-ups-tab.component';

@NgModule({
  declarations: [
    UserInfoComponent,
    HeroesListTabComponent,
    HistoryTabComponent,
    PowerUpsTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: UserInfoComponent
    }
    ]),
    MatTabsModule
  ]
})
export class UserInfoModule {
}
