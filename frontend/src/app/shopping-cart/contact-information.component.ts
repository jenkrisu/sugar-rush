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

  public firstName: String;
  public lastName: String;
  public street: String;
  public postal: String;
  public city: String;
  public country: String;
  public email: String;

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

}
