import { Address } from './address';
import { Customer } from './customer';

export class Purchase {

    customer: Customer;
    cart: string;
    deliveryAddress: Address;

    constructor (customer: Customer, cart: string, address: Address) {
        this.customer = customer;
        this.cart = cart;
        this.deliveryAddress = address;
    }

}