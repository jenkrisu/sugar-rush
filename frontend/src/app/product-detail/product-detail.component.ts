import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  modalMessage: string;
  product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private shoppingCartService: ShoppingCartService
    ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>
        this.service.getProduct(+params['id']))
        .subscribe((product) => {
      this.product = product
          console.log("Product: " + product);
    });
  }

  addToCart(product: Product) {
    let added = this.shoppingCartService.addToShoppingCart(product);

    if (!added) {
      this.modalMessage = product.title + ' out of stock';
    } else {
      this.modalMessage = product.title + ' added to cart';
    }
  }

}
