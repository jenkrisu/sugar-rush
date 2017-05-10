export class Address {

  street: string;
  postal: string;
  city: string;
  country: string;

  constructor(street: string, postal: string, city: string, country: string) {
      this.street = street;
      this.postal = postal;
      this.city = city;
      this.country = country;
  }

}
