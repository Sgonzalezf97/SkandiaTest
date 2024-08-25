import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './landing/landing.module';

const routes: Routes = [

  // {
  //   path:'404',
  //   component: Error404PageComponent
  // },

  {
    path:'',
    // redirectTo: 'pokemon',
    // pathMatch:'full'
    loadChildren:() => import('./landing/landing.module').then(module => module.LandingModule)
  },
  {
    path:'**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
