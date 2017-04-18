import { Component, OnInit } from '@angular/core';

import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

import { ShoppingCartService } from '../shared/shopping-cart.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {

  private products: Product[];
  public items: CartItem[];

  constructor(private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

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
      if (this.items[i].product.title === product.title) {
        return i;
      }  
    }

    return -1;
  }

  // Fetch items from shopping cart
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

  // Get total price of products
  getTotalPrice() {
    let total = 0;
    
    for (let i = 0; i < this.items.length; i++) {
      let pricePerOne= this.items[i].product.price;
      let pricePerAll = this.items[i].amount * pricePerOne;
      total += pricePerAll;
    }

    return this.roundPrice(total);
  }

  // Round price of product
  roundPrice(price: number) {
    return Math.round(price * 100) / 100;
  }

  // Create array the size of stock, max size 10
  stockToArray(stock: number) {
    let length = 0;

    if (stock > 10) {
      length = 10;
    } else {
      length = stock;
    }

    let array = [length];

    for (let i = 0; i < stock; i++) {
      array[i] = i+1;
    }

    return array;
  }

  // Add or remove items to/from shopping cart
  changeAmount(item: CartItem, amount: number) {
    // If items added
    if (item.amount < amount) {
      let add = amount - item.amount;
      for (let i = 0; i < add; i++) {
        this.shoppingCartService.addToShoppingCart(item.product);
      }
    // If items removed
    } else if (item.amount > amount) {
      let remove = item.amount - amount;
      console.log(remove);
      for (let i = 0; i < remove; i++) {
        this.shoppingCartService.removeOneFromShoppingCart(item.product);
      }
    }

    // Refresh content from shopping cart
    this.products = this.productsFromShoppingCart();
    this.items = this.productsToCartItems(); 
  }

  // Remove all items of this type from shopping cart
  removeItem(item: CartItem) {
    this.shoppingCartService.removeAllFromShoppingCart(item.product, item.amount);

    // Refresh content from shopping cart
    this.products = this.productsFromShoppingCart();
    this.items = this.productsToCartItems(); 
  }

}
