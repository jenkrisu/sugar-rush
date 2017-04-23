import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Cart } from '../models/cart';
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

  private subscription: Subscription;
  public cart: Cart;

  constructor(private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.cart = new Cart([], 0);
    this.subscription = this.shoppingCartService
    .getShoppingCart()
    .subscribe(item => this.cart = item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Get total price of products
  getTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.cart.items.length; i++) {
      let pricePerOne= this.cart.items[i].product.price;
      let pricePerAll = this.cart.items[i].amount * pricePerOne;
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

    for (let i = 0; i < length; i++) {
      array[i] = i+1;
    }

    return array;
  }

  // Update amount of items in shopping cart
  changeAmount(item: CartItem, amount: number) {
    // Add items
    if (item.amount < amount) {
      let add = amount - item.amount;
      for (let i = 0; i < add; i++) {
        this.shoppingCartService.addOne(item.product);
      }

    // Remove items
    } else if (item.amount > amount) {
      let remove = item.amount - amount;
      for (let i = 0; i < remove; i++) {
        this.shoppingCartService.removeOne(item.product);
      }
    }
  }

  // Remove all items of this type from shopping cart
  removeItem(item: CartItem) {
    this.shoppingCartService.removeAll(item);
  }

}
