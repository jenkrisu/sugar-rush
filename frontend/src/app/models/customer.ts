import { Address } from './address';

export class Customer {

    address: Address;
    firstName: string;
    lastName: string;
    email: string;

    constructor(address: Address, firstName: string, lastName: string, email: string) {
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

}
