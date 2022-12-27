import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroInfoPageComponent } from '@/user/hero-info-page/hero-info-page.component';
import { CreateUserPageComponent } from '@/user/create-user-page/create-user-page.component';
import { LoginPageComponent } from '@/user/login-page/login-page.component';




@NgModule({
  declarations: [
    LoginPageComponent,
    CreateUserPageComponent,
    HeroInfoPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
