import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Address } from '../models/address';
import { Customer } from '../models/customer';

import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ContactInformationComponent implements OnInit, OnDestroy, DoCheck {

  cannotContinue: boolean;

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
  private customerSubscription: Subscription;

  loggedIn: boolean;
  private loginSubscription: Subscription;

  constructor(private loginService: LoginService,
    private router: Router) { }

  // Subscribe to Customer BehaviorSubject for saving form input data
  ngOnInit() {
    this.loggedIn = false;

    //TODO: Login
    //this.loginSubscription = this.loginService
    // .getLoggedIn()
    // .subscribe(item -> this.loggedIn = item);

    this.customerSubscription = this.loginService
      .getCustomer()
      .subscribe(item => this.customer = item);

    this.fillContactForm();
  }

  // Update the Customer BehaviorSubject when changes to input fields occur
  ngDoCheck() {
    if (this.customer !== undefined) {
      this.updateCustomer();
    }
  }

  // Unsubscribe
  ngOnDestroy() {
    //TODO: Login
    //this.loginSubscription.unsubscribe();
    this.customerSubscription.unsubscribe();
  }

  // Create customer for input data storage and update it to ShoppingCartService
  updateCustomer() {
    const address = new Address(this.street, this.postal, this.city, this.country);
    let c = new Customer(address, this.firstName, this.lastName, this.email);

    const deliveryAddress = new Address(address.street, address.postal, address.city, address.country);
    c.deliveryAddress = deliveryAddress;
    
    this.loginService.setCustomer(c);
  }

  // Fill contact information form with possible previously inputted data
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
      this.cannotContinue = false;
      this.router.navigate(['/shipping']);

    } else {
      this.cannotContinue = true;
    }

  }

  formIsValidated() {
    let validated = true;

    this.firstNameError = false;
    this.lastNameError = false;
    this.streetError = false;
    this.cityError = false;
    this.postalError = false;
    this.countryError = false;
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
