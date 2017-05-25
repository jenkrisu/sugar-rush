package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Customer is an entity class for a customer item for the customer table.
 * It consists of customer related data.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-24
 * @since   1.8
 */
@Entity
@Data
public class Customer {

    /**
     * Auto-incremented id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    /**
     * Foreign key address_id.
     */
    @OneToOne
    @JoinColumn
    private Address address;

    /**
     * First name of the customer.
     */
    private String firstName;

    /**
     * Last name of the customer.
     */
    private String lastName;

    /**
     * Email of the customer.
     */
    private String email;

    /**
     * Default constructor.
     */
    public Customer() {

    }

    /**
     * Constructs a customer entity without address data.
     *
     * @param firstName     first name of the customer
     * @param lastName      last name of the customer
     * @param email         email address of the customer
     */
    public Customer(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    /**
     * Constructs a customer entity with address data.
     *
     * @param firstName     first name of the customer
     * @param lastName      last name of the customer
     * @param email         email address of the customer
     * @param address       customer's address
     */
    public Customer(String firstName, String lastName, String email, Address address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }
}
