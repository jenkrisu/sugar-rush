package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Purchase {

    /**
     * Auto-incremented id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    /**
     * Foreign key customer_id.
     */
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(nullable=false)
    private Customer customer;

    /**
     * Foreign key billing_address_id.
     */
    //@OneToOne(cascade=CascadeType.ALL)
    //@JoinColumn(nullable=false)
    //private Address billingAddress

    /**
     * Foreign key delivery_address_id.
     */
    //@OneToOne(cascade=CascadeType.ALL)
    //@JoinColumn(nullable=false)
    //private Address deliveryAddress


    /**
     * Datetime of addition.
     */
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    /**
     * Total amount of purchase.
     */
    private double price;

    /**
     * Default constructor.
     */
    public Purchase() {}

    /**
     * Adds datetime.
     */
    @PrePersist
    private void createdAt() {
        created = new Date();
    }

}
