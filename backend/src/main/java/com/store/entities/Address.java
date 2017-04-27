package com.store.entities;

import lombok.Data;

import javax.persistence.*;

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
     * Foreign key customer_id.
     */
    @ManyToOne
    @JoinColumn(nullable=false)
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
}
