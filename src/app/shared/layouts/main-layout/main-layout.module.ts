import {LayoutModule} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MainLayoutComponent} from '@layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MainLayoutModule {
}