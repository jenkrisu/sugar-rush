import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Address } from '../models/address';
import { Cart } from '../models/cart';
import { Customer } from '../models/customer';
import { Purchase } from '../models/purchase';
import { SimpleCartItem } from '../models/simple-cart-item';

import { LoginService } from '../shared/login.service';
import { ProductService } from '../shared/product.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ConfirmationComponent implements OnInit, OnDestroy {

  private customerSubscription: Subscription;
  customer: Customer;

  private cartSubscription: Subscription;
  cart: Cart;

  loggedIn: false;

  customerError: string;
  cartError: string;
  productError: string;
  vagueError: string;

  constructor(private loginService: LoginService,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private router: Router) { }


  // Subscribe to customer information
  ngOnInit() {
    this.customerSubscription = this.loginService
      .getCustomer()
      .subscribe(item => this.customer = item);

    this.cartSubscription = this.shoppingCartService
      .getShoppingCart()
      .subscribe(item => this.cart = item);
  }


  // Unsubscribe
  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  // Get total price of products
  getTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.cart.items.length; i++) {
      let pricePerOne = this.cart.items[i].product.price;
      let pricePerAll = this.cart.items[i].amount * pricePerOne;
      total += pricePerAll;
    }
    return this.roundPrice(total);
  }

  // Round price of product
  roundPrice(price: number) {
    return Math.round(price * 100) / 100;
  }

  order() {
    const purchase = this.makePurchaseObject(this.customer, this.cart);

    if (this.hasCustomerAndCart()) {

      this.productError = '';
      this.vagueError = '';

      this.productService.purchaseProducts(purchase)
        .subscribe(data => {
          console.log("Data:")
          console.log(data)
        },
        error => {
          if (error.status === 404) {

            if (error._body !== '') {
              this.productError = error.json().message;
            } else {
              this.vagueError = 'Unfortunately an error occurred.';
            }

          } else {
            this.vagueError = 'Unfortunately an error occurred.';
          }

          console.log(this.productError)
          console.log(this.vagueError)
          console.log("Error:");
          console.log(error)
        });

    }
  }

  hasCustomerAndCart() {
    let validated = true;

    this.customerError = '';
    this.cartError = '';

    if (this.customer.firstName === undefined
      || this.customer.lastName === undefined
      || this.customer.email === undefined
      || this.customer.address === undefined
      || this.customer.address.street == undefined
      || this.customer.address.city == undefined 
      || this.customer.address.postal == undefined
      || this.customer.address.country == undefined
      || this.customer.deliveryAddress === undefined
      || this.customer.deliveryAddress.city == undefined
      || this.customer.deliveryAddress.street == undefined
      || this.customer.deliveryAddress.postal == undefined
      || this.customer.deliveryAddress.country == undefined) {
      this.customerError = 'Contact information is not filled out.';
      validated = false;
    } else if (this.customer.firstName.length < 1
      || this.customer.lastName.length < 1
      || this.customer.email.length < 1
      || this.customer.address.street.length < 1
      || this.customer.address.city.length < 1
      || this.customer.address.postal.length < 1
      || this.customer.address.country.length < 1
      || this.customer.deliveryAddress.city.length < 1
      || this.customer.deliveryAddress.street.length < 1
      || this.customer.deliveryAddress.postal.length < 1
      || this.customer.deliveryAddress.country.length < 1) {
      this.customerError = 'Contact information is not filled out.';
      validated = false;
    }

    if (this.cart.total < 1) {
      this.cartError = 'No products in shopping cart.'
      validated = false;
    }

    return validated;
  }

  // Send only product id and amount to backend
  simplifyCart(cart: Cart) {
    const length = cart.items.length;
    let items: SimpleCartItem[] = [];

    for (let i = 0; i < length; i++) {
      items.push(new SimpleCartItem(cart.items[i].product.id, cart.items[i].product.title, cart.items[i].amount));
    }

    const simpleCart = {
      items: items,
      total: cart.total
    }

    const stringifiedCart = JSON.stringify(simpleCart);

    return stringifiedCart;
  }

  // Make purchase object
  makePurchaseObject(c: Customer, cart: Cart) {
    const customer = new Customer(c.address, c.firstName, c.lastName, c.email);
    const simpleCart = this.simplifyCart(cart);
    const deliveryAddress = c.deliveryAddress;
    const purchase = new Purchase(customer, simpleCart, deliveryAddress);
    return purchase;
  }

}
