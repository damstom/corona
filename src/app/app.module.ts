import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HalfOpenNapkeComponent } from './half-open-napke/half-open-napke.component';

const routes: Routes = [
  { path: '', component: HalfOpenNapkeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HalfOpenNapkeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
