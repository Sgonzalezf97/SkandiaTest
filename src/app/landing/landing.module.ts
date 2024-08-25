import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { landingRoutingModule } from './landing-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    landingRoutingModule,
  ]
})
export class LandingModule { }
