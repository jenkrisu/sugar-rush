package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

/**
 * Address is an entity class for an address item for the address table.
 * It consists of address related data.
 *
 * @author  Ville Haapavaara
 * @version 2017-04-27
 * @since   1.8
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

    /**
     * Default constructor.
     */
    public Address() {

    }

    /**
     * Constructs an address entity without the customer data.
     *
     * @param street    street of the address
     * @param city      city of the address
     * @param postal    postal code of the address
     * @param country   country of the address
     */
    public Address(String street, String city, String postal, String country) {
        this.street = street;
        this.city = city;
        this.postal = postal;
        this.country = country;
    }

    /**
     * Constructs an address entity with customer data.
     *
     * @param street    street of the address
     * @param city      city of the address
     * @param postal    postal code of the address
     * @param country   country of the address
     * @param customer  customer related to the address
     */
    public Address(String street, String city, String postal, String country, Customer customer) {
        this.street = street;
        this.city = city;
        this.postal = postal;
        this.country = country;
        this.customer = customer;
    }
}
