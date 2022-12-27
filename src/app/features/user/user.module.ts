import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroInfoComponent } from '@/user/hero-info/hero-info.component';
import { CreateUserPageComponent } from '@/user/create-user/create-user.component';
import { LoginComponent } from '@/user/login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    CreateUserPageComponent,
    HeroInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
