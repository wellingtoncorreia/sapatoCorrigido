import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../models/services/iproducts';
import { ProductService } from '../../models/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  products: Iproducts[] = [];
  buttonColor = '#ff6452';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }


  changeColor() {
    this.buttonColor = '#ff4500';
  }
}
