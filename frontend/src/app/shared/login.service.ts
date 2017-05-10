import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Address } from '../models/address';
import { Customer } from '../models/customer';

@Injectable()
export class LoginService {

  // Stores customer information on login to automatically fill out order details
  // Stores customer information when it is filled out in login form
  private customer = new BehaviorSubject<Customer>(new Customer(new Address("", "", "", "Madagascar"), "", "", ""));

  // Get customer from browser storage
  constructor() {
    this.getCustomerFromStorage();
  }

  // Return customer BehaviorSubject for Subscription
  getCustomer() {
    return this.customer;
  }

  // Set value to customer BehaviourSubject and to session storage
  setCustomer(c: Customer) {
    this.customer.next(c);
    const customerString = JSON.stringify(c);
    sessionStorage.setItem('sweetCustomer', customerString);
  }

  // Gets customer information from browser storage to application
  getCustomerFromStorage() {
   if (sessionStorage.getItem('sweetCustomer') !== null) {
      const customerString = sessionStorage.getItem('sweetCustomer');
      const customerObject = JSON.parse(customerString);
      this.customer.next(customerObject);
    }
  }

  registerUser(user) {
    console.log("User: " + JSON.stringify(user));
  }
}
