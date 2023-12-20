import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalfCardComponent } from './components/half-card/half-card.component';
import { LongCardComponent } from './components/long-card/long-card.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalCommentComponent } from './components/modal-comment/modal-comment.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    HalfCardComponent,
    LongCardComponent,
    TopBarComponent,
    ModalCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {
  
  
}
