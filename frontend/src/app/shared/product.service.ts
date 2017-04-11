import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { ShoppingCart } from '../models/shopping-cart';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  private sbtShoppingCart = 
    new BehaviorSubject<ShoppingCart>(new ShoppingCart(0, []));

  constructor(private http: Http) {
    if (sessionStorage.getItem('sbtShoppingCart') != null) {
      const cart = JSON.parse(sessionStorage.getItem('sbtShoppingCart'));
      this.sbtShoppingCart.next(cart);
    }
  }

  addToShoppingCart(product: Product) {
    return false;
  }

  getShoppingCart() {
    return this.sbtShoppingCart;
  }

  getProducts() {
    return this.http.get("/api/products").map(res => {
      console.log(res.json()._embedded.products);
      return res.json()._embedded.products;
    });
  }

  getProduct(id) {
    return this.http.get("/api/products/" + id).map(res => {
      console.log("GetProduct response: " + res.json());
      return res.json();
    });
  }
}
