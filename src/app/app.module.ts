import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalfCardComponent } from './components/half-card/half-card.component';
import { LongCardComponent } from './components/long-card/long-card.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HalfCardComponent,
    LongCardComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
  
}
