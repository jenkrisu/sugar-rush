package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * Created by Jenni on 24.4.2017.
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

    public Customer() {

    }

    public Customer(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public Customer(String firstName, String lastName, String email, Address address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }
}
