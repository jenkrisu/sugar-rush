import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ShoppingCartService } from '../shared/shopping-cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product;

  @Output()
  onAddedToCart = new EventEmitter<string>();

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    let message = '';
    let added = this.shoppingCartService.addToShoppingCart(product);

    if (!added) {
      message = product.title + ' out of stock';
    } else {
      message = product.title + ' added to cart';
    }

    this.onAddedToCart.emit(message);
  }

}
