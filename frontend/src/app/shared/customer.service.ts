import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Address } from '../models/address';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {

  private customer = new BehaviorSubject<Customer>(new Customer(new Address("", "", "", "Madagascar"), "", "", ""));

  // Return BehaviorSubject for Subscription
  getCustomer() {
    return this.customer;
  }

  // Set value to BehaviourSubject
  setCustomer(customer: Customer) {
    this.customer.next(customer);
  }

}
