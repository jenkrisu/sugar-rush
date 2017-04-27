import { Address } from './address';

export class Customer {

    address: Address;
    firstName: String;
    lastName: String;
    email: String;

    constructor(address: Address, firstName: String, lastName: String, email: String) {
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}
