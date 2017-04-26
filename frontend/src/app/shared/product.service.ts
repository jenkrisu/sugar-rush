import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
}
