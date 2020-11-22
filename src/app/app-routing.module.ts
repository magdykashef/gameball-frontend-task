import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LevelsComponent } from './levels/levels.component';
import { GamePlanComponent } from './game-plan/game-plan.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { QuestsComponent } from './quests/quests.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gameplan', component: GamePlanComponent },
  { path: 'levels', component: LevelsComponent },
  { path: 'account', component: AccountSettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
