import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public activeId: number;
  public modalMessage: string;
  
  // Currently shown products
  public shownProducts;

  // All products
  products;

  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit() {
    this.activeId = 1;
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(products => {
        // Newest first in array
        this.products = products.reverse();

        // Show only new products
        this.newProducts();
      },
        err => {
          console.log(err);
        }
      );
  }

  // Change modal message
  onAddedToCart(message: string) {
    this.modalMessage = message;
  }

  // Get third most new products
  newProducts() {
    if (this.products && this.products.length > 3) {
      this.shownProducts = this.products.slice(0, 3);
    }
  }

  // Show only new products
  showNew(event: any) {
    event.preventDefault();
    this.activeId = 1;
    this.newProducts();
  }

  // Show all products
  showAll(event: any) {
    event.preventDefault();
    this.activeId = 2;
    this.shownProducts = this.products;
  }

  // Show chocolate bars
  showBars(event:any) {
    event.preventDefault();
    this.shownProducts = this.products.filter(item => item.category === 'bar');
  }

  // Show truffle delights
  showTruffles(event:any) {
    event.preventDefault();
    this.shownProducts = this.products.filter(item => item.category === 'truffle');
  }

  // Show chocolate rounds
  showRounds(event:any) {
    event.preventDefault();
    this.shownProducts = this.products.filter(item => item.category === 'round');
  }

  // Show search
  search(event: any) {
    event.preventDefault();
    this.activeId = 4;
    this.shownProducts = [];
  }

}
