import { Component, OnInit } from '@angular/core';
import { ListCard } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  public products: ListCard[]=[]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => this.products = products);
    console.log(this.products)
  }
}
