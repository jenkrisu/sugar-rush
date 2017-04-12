import { Component, OnInit } from '@angular/core';

import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  private products: Product[];
  public items: CartItem[];

  constructor() { }

  ngOnInit() {
    this.products = this.productsFromShoppingCart();
    this.items = this.productsToCartItems(); 
  }

  // Parse products to CartItem objects
  productsToCartItems() {
    this.items = [];

    for (let i = 0; i < this.products.length; i++) {
      let index = this.containsProduct(this.products[i]);
      if (index > -1) {
        this.items[index].amount++;
      } else {
        this.items.push(new CartItem(this.products[i], 1));
      }
    }

    return this.items;
  }

  // Return index of product, -1 if not found
  containsProduct(product: Product) {
    let i = 0;
    
    for (i; i < this.items.length; i++) {
      if (JSON.stringify(this.items[i].product) === JSON.stringify(product)) {
        return i;
      }  
    }

    return -1;
  }

  productsFromShoppingCart() {
    this.products = [];
    
    // Fetch from session storage
    if (sessionStorage.getItem('sbtShoppingCart') !== null) {
      this.products = JSON.parse(sessionStorage.getItem('sbtShoppingCart'));
    }

    // Sort products by title
    if (this.products.length > 1) {
      this.products.sort(function(a, b) {
        let productA = a.title.toUpperCase();
        let productB = b.title.toUpperCase();
        if (productA < productB) {
          return -1;
        }
        if (productA > productB) {
          return 1;
        }
        return 0;
      })
    }

    return this.products;
  }

  roundPrice(price: number) {
    return Math.round(price * 100) / 100;
  }

}
