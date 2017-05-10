import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  showAddProduct: boolean = false;
  products;
  tmpProduct = {
    "id": null,
    "title": null,
    "description": null,
    "ingredients": null,
    "weight": null,
    "price": null,
    "stock": null,
    "image": null,
    "categories": null,
    "created": null
  };
  form;
  productAmount;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProducts();
    this.form = this.formBuilder.group({
      id: this.formBuilder.control(''),
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
      categories: this.formBuilder.control(''),
      created: this.formBuilder.control('')
    });
  }

  changeAddProductStatus() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    } else {
      this.showAddProduct = true;
    }
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(products => {
          console.log(products);
          this.products = products;
          this.productAmount = products.length;
        },
        err => {
          console.log(err);
        }
      );
  }

  resetTmpProduct() {
    this.tmpProduct = {
      "id": null,
      "title": null,
      "description": null,
      "ingredients": null,
      "weight": null,
      "price": null,
      "stock": null,
      "image": null,
      "categories": null,
      "created": null
    };
  }

  expandProduct(product) {
    this.tmpProduct = product;
    this.form.controls['id'].setValue(this.tmpProduct.id);
    this.form.controls['title'].setValue(this.tmpProduct.title);
    this.form.controls['description'].setValue(this.tmpProduct.description);
    this.form.controls['ingredients'].setValue(this.tmpProduct.ingredients);
    this.form.controls['weight'].setValue(this.tmpProduct.weight);
    this.form.controls['price'].setValue(this.tmpProduct.price);
    this.form.controls['stock'].setValue(this.tmpProduct.stock);
    this.form.controls['image'].setValue(this.tmpProduct.image);
    this.form.controls['categories'].setValue(this.tmpProduct.categories);
    this.form.controls['created'].setValue(this.tmpProduct.created);
  }

  editProduct(product) {
    console.log("onSubmit");
    console.log("Product: " + JSON.stringify(product));
    this.productService.updateProduct(product)
      .subscribe((data) => {
        window.location.reload();
      });
  }

  deleteProduct(product) {
    console.log("Delete: " + product);
    this.productService.deleteProduct(product)
      .subscribe((data) => {
        window.location.reload();
      });
  }
}
