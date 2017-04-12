import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingCartService } from './shared/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public shoppingCartTotal: number;
  private subscription: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingCartService.getShoppingCartTotal().subscribe(
      item => this.shoppingCartTotal = item
    );
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
