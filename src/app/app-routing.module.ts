import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroInfoComponent} from '@features/hero-info/hero-info.component';
import {AuthGuard} from '@guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  }, {path: 'home', component: HeroInfoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
