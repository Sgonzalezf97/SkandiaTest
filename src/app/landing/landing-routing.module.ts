import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: '',component: MainPageComponent},
      // {path: 'search',component: SearchPageComponent},
      // {path: 'game',component: GamePageComponent},
      // {path: ':id',component: PokemonPageComponent},
      // {path: '**',redirectTo: 'search'},
    ],

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class landingRoutingModule { }
