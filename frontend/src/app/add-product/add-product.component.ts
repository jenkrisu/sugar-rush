import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  tmpProduct = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("onSubmit");
    console.log(this.tmpProduct);
  }
}
