import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Cart } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable()
export class ShoppingCartService {

  private cart = new BehaviorSubject<Cart>(new Cart([], 0));

  constructor() {
    if (sessionStorage.getItem('sweetCart') !== null) {
      console.log('From storage: ' + sessionStorage.getItem('sweetCart'));
      const cartObject = JSON.parse(sessionStorage.getItem('sweetCart'));
      this.cart.next(cartObject);
      console.log('Cart to object: ' + cartObject)
    }
  }

  // Return BehaviourSubject for Subscription
  getShoppingCart() {
    return this.cart;
  }

  // Remove products from shopping cart
  // Product: Product type to remove
  // Amount: Amount to remove
  removeAll(c: CartItem) {
    let cart = this.cart.getValue();

    const cartItem = cart.items.find(item => item.product.id === c.product.id);
    if (cartItem !== undefined) {
      const index = cart.items.indexOf(cartItem);
      if (index > -1) {
        cart.items.splice(index, 1);
        cart.total -= c.amount;
        this.cart.next(cart);
      }
    }

  }

  // Remove one product from shopping cart
  // Product: Product type to remove
  removeOne(p: Product) {
    let cart = this.cart.getValue();

    const cartItem = cart.items.find(item => item.product.id === p.id);
    if (cartItem !== undefined) {
      const index = cart.items.indexOf(cartItem);
      if (index > -1 && cartItem.amount > 0) {
        cartItem.amount--;
        cart.items[index] = cartItem;
        cart.total--;
        this.cart.next(cart);
      }
    }
  }

  // Add item to shopping cart
  // Return true if added, false if not: Modals change text depending on return value
  addOne(p: Product) {
    let cart = this.cart.getValue();

    let productAmount = 0;
    let cartItem = cart.items.find(item => item.product.id === p.id);
    
    if (cartItem !== undefined) {
      productAmount = cartItem.amount;
    }

    // Amount would exceed stock: cannot add
    if (productAmount >= p.stock) {
      return false;
    }

    // Amount smaller than stock: can add
    if (productAmount === 0) {
      cart.items.push(new CartItem(p, 1));
    } else {
      const index = cart.items.indexOf(cartItem);
      if (index > -1) {
        cartItem.amount++;
        cart.items[index] = cartItem;
      } else {
        return false;
      }
    }
    
    cart.total++;
    this.cart.next(cart);
    return true;
  }

}
