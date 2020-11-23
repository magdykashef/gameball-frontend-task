import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePlanComponent } from './game-plan.component';
import { SearchComponent } from './../shared/components/search/search.component';


@NgModule({
  declarations: [
    GamePlanComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GamePlanModule { }
