import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Product } from '../models/product';

@Injectable()
export class ShoppingCartService {

  private shoppingCartTotal = new BehaviorSubject<number>(0);
  private shoppingCart: Product[];

  constructor() {
    if (sessionStorage.getItem('sbtShoppingCart') !== null) {
      let amount = JSON.parse(sessionStorage.getItem('sbtShoppingCart')).length;
      this.shoppingCartTotal.next(amount);
    } 
  }

  getShoppingCartTotal() {
    return this.shoppingCartTotal;
  }

  // Remove products of type product from shopping cart
  removeAllFromShoppingCart(product: Product, amount: number) {
    // Get shopping cart
    if (sessionStorage.getItem('sbtShoppingCart') !== null) {
      this.shoppingCart = JSON.parse(sessionStorage.getItem('sbtShoppingCart'));
    } else {
      this.shoppingCart = [];
    }

    // Remove all products from shopping cart
    for (let i = 0; i < amount; i++) {
      for (let i = 0; i < this.shoppingCart.length; i++) {
        if (this.shoppingCart[i].title === product.title) {
          this.shoppingCart.splice(i, 1);
          break;
        }
      }
    }
    
    // Update shopping cart
    sessionStorage.setItem('sbtShoppingCart', JSON.stringify(this.shoppingCart));
    this.shoppingCartTotal.next(this.shoppingCart.length);
  }

  // Remove one product from shopping cart
  removeOneFromShoppingCart(product: Product) {
    // Get shopping cart
    if (sessionStorage.getItem('sbtShoppingCart') !== null) {
      this.shoppingCart = JSON.parse(sessionStorage.getItem('sbtShoppingCart'));
    } else {
      this.shoppingCart = [];
    }

    // Find index of first occurrance of item
    let index = -1;
    for (let i = 0; i < this.shoppingCart.length; i++) {
      if (this.shoppingCart[i].title === product.title) {
        index = i;
        break;
      }
    }

    // If item found, remove it from shopping cart
    if (index > -1) {
      this.shoppingCart.splice(index, 1);
      sessionStorage.setItem('sbtShoppingCart', JSON.stringify(this.shoppingCart));
      this.shoppingCartTotal.next(this.shoppingCart.length);
    }
  }

  // Add item to shopping cart, return true if added, false if not
  addToShoppingCart(product: Product) {
    // Initialize shopping cart
    if (sessionStorage.getItem('sbtShoppingCart') !== null) {
      this.shoppingCart = JSON.parse(sessionStorage.getItem('sbtShoppingCart'));
      this.shoppingCartTotal.next(this.shoppingCart.length);
    } else {
      this.shoppingCart = [];
    }

    // Add product if possible
    if (this.canAdd(product)) {
        this.shoppingCart.push(product);
        sessionStorage.setItem('sbtShoppingCart', JSON.stringify(this.shoppingCart));
        this.shoppingCartTotal.next(this.shoppingCart.length);
        return true;
    } else {
        return false;
    }
  }

  // Check if item can be added
  canAdd(product: Product) {
    let i = 0;
    let amount = 0;
    let length = this.shoppingCart.length;

    if (length > 0) {

      // See how many products in cart
      for (i; i < length; i++) {
        if (this.shoppingCart[i].title === product.title) {
          amount++;
        }
      }

      // If amount in cart is bigger than stock
      if (amount >= product.stock) {
        return false;
      }
    }
    
    return true;
  }

}
