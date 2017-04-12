import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) {
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
