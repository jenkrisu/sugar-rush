import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addToCart(product: Product) { 
    let added = this.productService.addToShoppingCart(product);
    if (!added) {
      console.log('cannot add');
    }
  }

}
