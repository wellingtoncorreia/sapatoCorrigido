import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';
import { products } from '../data/mock-product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Iproducts[]> {
    return of(products);
  }
}
