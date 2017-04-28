import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Cart } from '../models/cart';
import { Address } from '../models/address';
import { Customer } from '../models/customer';

import { LoginService } from '../shared/login.service';
import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ConfirmationComponent implements OnInit, OnDestroy {

  private customerSubscription: Subscription;
  customer: Customer;

  private cartSubscription: Subscription;
  cart: Cart;

  loggedIn: false;

  constructor(private loginService: LoginService,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private router: Router) { }


 // Subscribe to customer information
 ngOnInit() {
    this.customerSubscription = this.loginService
      .getCustomer()
      .subscribe(item => this.customer = item);

    //TODO
    //this.loginSubscription = this.loginService
    //  .getLoggedIn()
    //  .subscribe(item => this.loggedIn = item);

    this.cartSubscription = this.shoppingCartService
    .getShoppingCart()
    .subscribe(item => this.cart = item);
  }


  // Unsubscribe
  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
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

  order() {
    if (this.loggedIn) {



    } else {

      this.productService.purchaseProducts(this.customer, this.cart)
        .subscribe(data => {
          console.log(data)
        },
          error => {
            console.log(error);
        }
      );
    }
    

  }
  
}
