import { Component } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  public goals=
    {title:"Conocer a mi sobrino",category:"Bienestar",date:"Diciembre/2022",goal:6000000,current:0};

}
