import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListCard } from '../interfaces/product.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string ='https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  getProducts():Observable<ListCard[]>{
    return this.http.get<{ listCard: ListCard[] }>(this.baseUrl).pipe(
      map(response => response.listCard)
    );
  }
}
