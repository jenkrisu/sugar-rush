import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public shoppingCart: number;
  private subscription: Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.subscription = this.productService.getShoppingCart().subscribe(
      item => this.shoppingCart = item.totalAmount
    );
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
