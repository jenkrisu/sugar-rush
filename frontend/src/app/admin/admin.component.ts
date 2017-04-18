import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  showAddProduct: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeAddProductStatus() {
    if (this.showAddProduct) {
      this.showAddProduct = false;
    } else {
      this.showAddProduct = true;
    }
  }

}
