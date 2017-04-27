import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Address } from '../models/address';
import { Customer } from '../models/customer';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss', './shopping-cart.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy, DoCheck {

  canContinue: boolean;

  firstNameError: boolean;
  lastNameError: boolean;
  streetError: boolean;
  postalError: boolean;
  cityError: boolean;
  countryError: boolean;
  emailError: boolean;

  firstName: string;
  lastName: string;
  street: string;
  postal: string;
  city: string;
  country: string;
  email: string;

  private customer: Customer;
  private subscription: Subscription;

  constructor(private loginService: LoginService) { }

  // Subscribe to Customer BehaviorSubject
  ngOnInit() {
    this.subscription = this.loginService
      .getCustomer()
      .subscribe(item => this.customer = item);
    this.fillContactForm();
  }

  // Update the BehaviorSubject when changes to input fields occur
  ngDoCheck() {
    if (this.customer !== undefined) {
      this.updateCustomer();
    }
  }

  // Unsubscribe
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Create customer and update it to ShoppingCartService
  updateCustomer() {
    const address = new Address(this.street, this.postal, this.city, this.country);
    let c = new Customer(address, this.firstName, this.lastName, this.email);
    this.loginService.setCustomer(c);
  }

  // Fill contact information form with previously inputted data
  fillContactForm() {
    this.street = this.customer.address.street;
    this.postal = this.customer.address.postal;
    this.city = this.customer.address.city;
    this.country = this.customer.address.country;
    this.firstName = this.customer.firstName;
    this.lastName = this.customer.lastName;
    this.email = this.customer.email;
  }

  continue() {

    if (this.formIsValidated()) {
      this.canContinue = true;

    } else {
      this.canContinue = false;
    }

  }

  formIsValidated() {
    let validated = true;

    this.firstNameError = false;
    this.lastNameError = false;
    this.streetError = false;
    this.cityError = false;
    this.postalError = false;
    this.countryError= false;
    this.emailError = false;

    if (this.firstName.length < 1) {
      this.firstNameError = true;
      validated = false;
    }

    if (this.lastName.length < 1) {
      this.lastNameError = true;
      validated = false;
    }

    if (this.street.length < 1) {
      this.streetError = true;
      validated = false;
    }
    
    if (this.postal.length < 1) {
      this.postalError = true;
      validated = false;
    }
    if (this.city.length < 1) {
      this.cityError = true;
      validated = false;
    }

    if (this.country.length < 0) {
      this.countryError = true;
      validated = false;
    }

    if (!this.validateEmail(this.email)) {
      this.emailError = true;
      validated = false;
    }

    return validated;
  }

  validateEmail(email: string) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

}
