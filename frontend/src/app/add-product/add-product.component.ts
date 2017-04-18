import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('' /*, Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ]) */),
      desc: this.formBuilder.control(''),
      ingredients: this.formBuilder.control(''),
      weight: this.formBuilder.control(''),
      price: this.formBuilder.control(''),
      stock: this.formBuilder.control(''),
      image: this.formBuilder.control('')
    });
  }

  onSubmit(product) {
    console.log("onSubmit");
    console.log(product);

    /* let product: Product = new Product(this.tmpProduct.title, this.tmpProduct.desc,
    this.tmpProduct.ingredients, this.tmpProduct.weight, this.tmpProduct.price,
    this.tmpProduct.stock, this.tmpProduct.image); */


  }
}
