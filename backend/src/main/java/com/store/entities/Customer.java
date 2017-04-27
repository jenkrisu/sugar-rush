package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
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

    //TODO: Add address, one customer can have many addresses
    /**
     * Customer's address foreign key address_id.
     */
    @OneToMany
    @JoinColumn(nullable=false)
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

}
