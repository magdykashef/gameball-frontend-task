import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { GamePlanModule } from './game-plan/game-plan.module';
import { LevelsModule } from './levels/levels.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { ChallengesModule } from './challenges/challenges.module';
import { QuestsModule } from './quests/quests.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    GamePlanModule,
    LevelsModule,
    AccountSettingsModule,
    ChallengesModule,
    QuestsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
