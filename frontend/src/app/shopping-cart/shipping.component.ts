import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Address } from '../models/address';
import { Customer } from '../models/customer';

import { LoginService } from '../shared/login.service';
import { ShoppingCartService } from '../shared/shopping-cart.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShippingComponent implements OnInit {

  dataTarget: string;

  private customerSubscription: Subscription;
  customer: Customer;

  cannotContinue: boolean;

  deliveryStreetError: boolean;
  deliveryPostalError: boolean;
  deliveryCityError: boolean;

  deliveryStreet: string;
  deliveryPostal: string;
  deliveryCity: string;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.customerSubscription = this.loginService
      .getCustomer()
      .subscribe(item => this.customer = item);
  }

  // Unsubscribe
  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }

  changeAddress() {
    this.cannotContinue = false;

    if (this.formIsValidated()) {
      this.dataTarget = 'shippingForm';
      this.customer.deliveryAddress.street = this.deliveryStreet;
      this.customer.deliveryAddress.postal = this.deliveryPostal;
      this.customer.deliveryAddress.city = this.deliveryCity;
    } else {
      this.cannotContinue = true;
      this.dataTarget = '';
    }

  }

  formIsValidated() {
    let validated = true;

    this.deliveryStreetError = false;
    this.deliveryCityError = false;
    this.deliveryPostalError = false;

    if (this.deliveryStreet === undefined || this.deliveryStreet.length < 1) {
      this.deliveryStreetError = true;
      validated = false;
    }

    if (this.deliveryPostal === undefined || this.deliveryPostal.length < 1) {
      this.deliveryPostalError = true;
      validated = false;
    }
    if (this.deliveryCity === undefined || this.deliveryCity.length < 1) {
      this.deliveryCityError = true;
      validated = false;
    }

    return validated;
  }

}
