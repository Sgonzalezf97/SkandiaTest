import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ListCard } from '../../interfaces/product.interface';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrl: './goal-card.component.css'
})
export class GoalCardComponent implements OnInit {

  @Input()
  public iconIndex: number = 0

  @Input()
  public product!: ListCard;

  ngOnInit(): void {
    if (!this.product) throw Error('Product property is requiered')
    this.getIcon();
  }

  public iconImage: string = 'assets/Happy.png'

  getIcon() {
    if (this.iconIndex == 0)
      this.iconImage = 'assets/Happy.png'
    if (this.iconIndex == 1)
      this.iconImage = 'assets/Trofeo.png'
    if (this.iconIndex == 2)
      this.iconImage = 'assets/Handheart.png'
    if (this.iconIndex > 2)
      this.iconImage = 'assets/Happy.png'
  }

}
