import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Cart } from './models/cart';
import { ShoppingCartService } from './shared/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  public shoppingCart: Cart;
  private subscription: Subscription;

  constructor(private router: Router,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.shoppingCart = new Cart([], 0);
    this.subscription = this.shoppingCartService
    .getShoppingCart()
    .subscribe(item => this.shoppingCart = item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
