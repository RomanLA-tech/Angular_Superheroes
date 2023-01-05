import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  }, {
    path: 'search',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/hero-search/hero-search.module').then(m => m.HeroSearchModule)
  },
  {
    path: 'user-info',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/user-info/user-info.module').then(m => m.UserInfoModule)
  },
  {
    path: 'hero/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/hero-info/hero-info.module').then(m => m.HeroInfoModule)
  },
  {
    path: 'battle',
    canActivate: [AuthGuard],
    loadChildren: () => import('./features/battle/battle.module').then(m => m.BattleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
