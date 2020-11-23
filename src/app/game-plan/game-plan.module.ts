import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePlanComponent } from './game-plan.component';


@NgModule({
  declarations: [GamePlanComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class GamePlanModule { }
