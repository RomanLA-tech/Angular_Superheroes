import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MainLayoutModule} from '@layouts/main-layout/main-layout.module';
import {HeroInfoComponent} from '@features/hero-info/hero-info.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent, HeroInfoComponent],
  imports: [
    BrowserModule,
    MainLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
