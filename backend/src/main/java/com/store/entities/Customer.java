package com.store.customer;

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
    private Long Id;

    private String firstName;
    private String lastName;
    private String billingStreet;
    private String billingPostal;
    private String billingCity;
    private String billingCountry;
    private String deliveryStreet;
    private String deliveryPostal;
    private String deliveryCity;
    private String deliveryCountry;
    private String email;

}
