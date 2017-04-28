import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Product } from '../models/product';
import { Purchase } from '../models/purchase';


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
  purchaseProducts(purchase: Purchase) {
    // TODO:
    // Check if there is token in storage -> user logged in -> add token to headers
    // Obs! Bearer tag can't be empty, else request fails on Edge browser.
    const headers = new Headers({'Bearer': 'temppi'});
    const options = new RequestOptions({ headers: headers });

    console.log(options)
    console.log(purchase)
    return this.http.post('/api/purchases', purchase, options);
  }

}
