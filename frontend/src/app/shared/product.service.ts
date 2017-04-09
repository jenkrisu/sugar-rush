import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
}