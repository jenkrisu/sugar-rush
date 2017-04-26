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
    this.getCartFromStorage();
  }

  // Return BehaviourSubject for Subscription
  getShoppingCart() {
    return this.cart;
  }

  // Remove items from shopping cart
  // C: CartItem to remove
  removeAll(c: CartItem) {
    let cart = this.cart.getValue();

    const cartItem = cart.items.find(item => item.product.id === c.product.id);
    if (cartItem !== undefined) {
      const index = cart.items.indexOf(cartItem);
      if (index > -1) {
        cart.items.splice(index, 1);
        cart.total -= c.amount;
        this.saveCart(cart);
      }
    }

  }

  // Remove one product from shopping cart
  // P: Product type to remove
  removeOne(p: Product) {
    let cart = this.cart.getValue();

    const cartItem = cart.items.find(item => item.product.id === p.id);
    if (cartItem !== undefined) {
      const index = cart.items.indexOf(cartItem);
      if (index > -1 && cartItem.amount > 0) {
        cartItem.amount--;
        cart.items[index] = cartItem;
        cart.total--;
        this.saveCart(cart);
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
      this.sortItems(cart.items);
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
    this.saveCart(cart);
    return true;
  }

  // Gets cart from session storage and sets it to Subscription
  getCartFromStorage() {
    if (sessionStorage.getItem('sweetCart') !== null) {
      const cartString = sessionStorage.getItem('sweetCart');
      const cartObject = JSON.parse(cartString);
      this.cart.next(cartObject);
    }
  }
  
  // Saves cart to session storage and Subscription
  saveCart(c: Cart) { 
    this.cart.next(c);
    const cart = JSON.stringify(c);
    sessionStorage.setItem('sweetCart', cart);
  }

  // Sort items by product title
  sortItems(items: CartItem[]) {
    if (items.length > 1) {

      items.sort(function(a, b) {
        let productA = a.product.title.toUpperCase();
        let productB = b.product.title.toUpperCase();
        
        if (productA < productB) {
          return -1;
        }

        if (productA > productB) {
          return 1;
        }

        return 0;
      });
    }
  }

}
