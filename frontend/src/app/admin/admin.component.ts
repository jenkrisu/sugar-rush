import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  showAddProduct: boolean = false;
  products;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
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
        },
        err => {
          console.log(err);
        }
      );
  }

  editProduct(product) {
    console.log("Edit: " + JSON.stringify(product));

  }

  deleteProduct(product) {
    console.log("Delete: " + product);
    this.productService.deleteProduct(product)
      .subscribe((data) => {
        window.location.reload(true);
      });
  }
}
