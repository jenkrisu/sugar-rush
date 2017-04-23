import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products;

  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit() {
    this.getNewProducts();
  }

  getNewProducts() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        if (products.length > 3) {
          this.products = products.slice(products.length - 3);
        }
      },
          err => {
            console.log(err);
          }
      );
  }

}
