import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { landingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GoalComponent } from './components/goal/goal.component';
import { GoalCardComponent } from './components/goal-card/goal-card.component';
import { AuxColorPipe } from './pipes/aux-color.pipe';



@NgModule({
  declarations: [
    LayoutPageComponent,
    MainPageComponent,
    GoalComponent,
    GoalCardComponent,
    AuxColorPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    landingRoutingModule,
  ]
})
export class LandingModule { }
