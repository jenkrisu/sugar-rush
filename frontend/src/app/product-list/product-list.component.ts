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
  public modalTitle: string;
  public noResults: boolean;
  public searchWord: string;
  public searchHint: string;

  public searchTitle: boolean;
  public searchDesc: boolean;
  public searchIngredients: boolean;
  
  // Currently shown products
  public shownProducts;

  // Products shown if in search tab
  public searchResults;

  // All products
  products;

  constructor(private productService: ProductService,
              private router: Router) {}

  ngOnInit() {
    this.searchWord = '';
    this.searchTitle = true;
    this.searchDesc = true;
    this.searchIngredients = true;
    this.searchHint = 'Search chocolates...';
    this.activeId = 1;
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(products => {
        // Newest first in array
        this.products = products;

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
    if (this.modalMessage.includes('added')) {
      this.modalTitle = 'Item Added';
    } else {
      this.modalTitle = 'Out of Stock';
    }
  }

  // Get third most new products
  newProducts() {
    this.shownProducts = this.products;

    if (this.products && this.products.length > 3) {
      this.shownProducts = this.products.slice(this.products.length - 3);
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
    this.activeId = 3;
    this.shownProducts = this.products.filter(item => item.categories.includes('bar'));
  }

  // Show truffle delights
  showTruffles(event:any) {
    event.preventDefault();
    this.activeId = 3;
    this.shownProducts = this.products.filter(item => item.categories.includes('truffle'));
  }

  // Show chocolate rounds
  showRounds(event:any) {
    event.preventDefault();
    this.activeId = 3;
    this.shownProducts = this.products.filter(item => item.categories.includes('round'));
  }

  // Show search
  searchProducts(event: any) {
    event.preventDefault();
    this.activeId = 4;
    this.shownProducts = [];
  }
  
  // Searches products
  onKeyUp() {
    this.noResults = false;

    if (this.searchWord.length > 0 && this.searchWord !== ' ') {

      // Product search searches title and description
      let results = this.products.filter(function(item) {
      // Includes is case sensitive
      const title = item.title.toLowerCase();
      const desc = item.description.toLowerCase();
      const ingr = item.ingredients.toLowerCase();
      const search = this.searchWord.toLowerCase();

      if (this.searchTitle && this.searchDesc && this.searchIngredients) {
        return title.includes(search) || desc.includes(search) || ingr.includes(search);
      }

      if(this.searchTitle && this.searchDesc) {
        return title.includes(search) || desc.includes(search);
      }

      if (this.searchTitle && this.searchIngredients) {
        return title.includes(search) || ingr.includes(search);
      }

      if (this.searchDesc && this.searchIngredients) {
        return desc.includes(search) || ingr.includes(search);
      }

      if (this.searchTitle) {
        return title.includes(search);
      }

      if (this.searchDesc) {
        return desc.includes(search);
      }

      if (this.searchIngredients) {
        return ingr.includes(search)
      }
      
      return false;
      }.bind(this));

      this.searchResults = results;
    
      if (results.length === 0) {
        this.noResults = true;
      }

    } else {
      this.searchResults = [];
    }
  }

  // Return whether any search options are selected
  searchOptions() {
    return this.searchTitle || this.searchDesc || this.searchIngredients;
  }

}
