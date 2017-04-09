import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }

  get() {
    return this.http.get("/api/products").map(res => {
      res.json().subscribe(data => {
        console.log("Data: " + data);
        return data;
      }, err => {
        console.log("Error: " + err);
      })
    })
  }
}
