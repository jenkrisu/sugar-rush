import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('' /*, Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ]) */),
      description: this.formBuilder.control(''),
      ingredients: this.formBuilder.control(''),
      weight: this.formBuilder.control(''),
      price: this.formBuilder.control(''),
      stock: this.formBuilder.control('' /*, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])*/),
      image: this.formBuilder.control(''),
      categories: this.formBuilder.control('')
    });
  }

  onSubmit(product) {
    console.log("onSubmit");
    this.productService.addProduct(product).subscribe(
      (data) => {
        window.location.reload();
      }
    );
  }
}
