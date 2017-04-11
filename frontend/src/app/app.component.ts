import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from './shared/product.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public shoppingCart: Product[];
  private subscription: Subscription;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.subscription = this.productService.getShoppingCart().subscribe(
      item => this.shoppingCart = item
    );
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
