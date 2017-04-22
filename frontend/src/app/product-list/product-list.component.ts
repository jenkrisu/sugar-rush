import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  modalMessage: string;
  
  products;

  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products
      },
          err => {
            console.log(err);
          }
      );
  }

  onAddedToCart(message: string) {
    this.modalMessage = message;
  }

}
