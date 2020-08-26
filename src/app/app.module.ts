import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSectionComponent } from './game-section/game-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GamesWrapperComponent } from './games-wrapper/games-wrapper.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSectionComponent,
    GamesWrapperComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
