import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Cart } from '../models/cart';
import { Customer } from '../models/customer';
import { Address } from '../models/address';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getProducts() {
    return this.http.get("/api/products").map(res => {
      return res.json()._embedded.products;
    });
  }

  getProduct(id) {
    return this.http.get("/api/products/" + id).map(res => {
      console.log("GetProduct response: " + res.json());
      return res.json();
    });
  }

  addProduct(product) {
    return this.http.post("/api/products", product);
  }

  updateProduct(product) {
    let uri:string = "api/products/" + product.id;
    return this.http.put(uri, product);
  }

  deleteProduct(product) {
    console.log("deleteProduct");
    let uri:string = "api/products/" + product.id;
    return this.http.delete(uri);
  }

  // Purchasing products as new customer
  purchaseProducts(customer: Customer, cart: Cart) {
     let stringifiedCart = this.stringifyCart(cart);
     
     // TODO: Delivery address would be different if user is selected different delivery address
     let deliveryAddress = new Address(customer.address.street, customer.address.city, customer.address.postal, customer.address.country);

     let purchase = {
       customer: customer,
       cart: stringifiedCart,
       address: deliveryAddress
     }

     return this.http.post("/api/purchase/new", purchase);
  }

  // Purchasing products as old custome
  purchaseProductsLoggedIn(customer: Customer, cart: Cart) {
    // TODO:
    // Id as header?
    let stringifiedCart = this.stringifyCart(cart);
     
    // TODO: Delivery address would be different if user is selected different delivery address
    let deliveryAddress = new Address(customer.address.street, customer.address.city, customer.address.postal, customer.address.country);

    let purchase = {
      cart: stringifiedCart,
      address: deliveryAddress
    }

    return this.http.post("/api/purchase/old", purchase);
  }

  stringifyCart(cart: Cart) {
     let stringifiedItems = JSON.stringify(cart.items);
     let stringifiedCart = {
       items: stringifiedItems,
       total: cart.total
     }
     return stringifiedCart;
  }

}
