import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Product } from '../models/product';

@Injectable()
export class ProductService {

  private sbtShoppingCart = new BehaviorSubject<Array<Product>>([]);

  constructor(private http: Http) {
  }

  getShoppingCart() {
    return this.sbtShoppingCart;
  }

  setShoppingCart(cart: Product[]) {
    this.sbtShoppingCart.next(cart);
  }

  getProducts() {
    return this.http.get("/api/products").map(res => {
      console.log(res.json()._embedded.products);
      return res.json()._embedded.products;
    });
  }
}
