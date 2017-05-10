package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * Created by Ville on 27.4.2017.
 */
@Entity
@Data
public class Address {

    /**
     * Address' id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /**
     * Foreign key customer_id, only required if a customer with account.
     */
    @OneToOne
    @JoinColumn
    private Customer customer;

    /**
     * Street of the address.
     */
    private String street;

    /**
     * Postal code of the address.
     */
    private String postal;

    /**
     * City of the address.
     */
    private String city;

    /**
     * Country of the address.
     */
    private String country;

    public Address() {
    }

    public Address(String street, String city, String postal, String country) {
        this.street = street;
        this.city = city;
        this.postal = postal;
        this.country = country;
    }

    public Address(String street, String city, String postal, String country, Customer customer) {
        this.street = street;
        this.city = city;
        this.postal = postal;
        this.country = country;
        this.customer = customer;
    }
}
