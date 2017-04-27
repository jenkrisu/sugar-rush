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
    //private Address address;

    private String firstName;
    private String lastName;
    private String email;

}
