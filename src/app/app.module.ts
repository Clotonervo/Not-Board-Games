import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameSectionComponent } from './game-section/game-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GamesWrapperComponent } from './games-wrapper/games-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    GameSectionComponent,
    GamesWrapperComponent
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
