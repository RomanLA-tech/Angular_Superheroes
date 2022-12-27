import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '@user/login/login.component';
import { HeroInfoComponent } from '@user/hero-info/hero-info.component';
import { CreateUserComponent } from '@user/create-user/create-user.component';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';

@NgModule({
	declarations: [
		LoginComponent,
		CreateUserComponent,
		HeroInfoComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule.forChild([{
			path: '', component: MainLayoutComponent, children: [
				{path: '', redirectTo: '/user/login', pathMatch: 'full'},
				{path: 'login', component: LoginComponent}
			]
		}])
	]
})
export class UserModule {}
