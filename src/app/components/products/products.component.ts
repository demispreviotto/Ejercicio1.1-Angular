import { Component } from '@angular/core';
import { ProductInterface } from '../../interfaces/product-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Array<ProductInterface> = [
    {
      id: 1,
      name: 'product1',
      price: 10,
    },
    {
      id: 2,
      name: 'product2',
      price: 10,
    },
    {
      id: 3,
      name: 'product3',
      price: 10,
    },
  ]
}
