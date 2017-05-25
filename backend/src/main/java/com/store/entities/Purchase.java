package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Purchase is an entity class for a purchase item for the purchase table.
 * It consists of purchase related data.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-24
 * @since   1.8
 */
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
    @ManyToOne(cascade=CascadeType.ALL)
    @JoinColumn(nullable=false)
    private Customer customer;

    /**
     * Foreign key billing_address_id.
     */
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(nullable=false)
    private Address billingAddress;

    /**
     * Foreign key delivery_address_id.
     */
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(nullable=false)
    private Address deliveryAddress;


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

    /**
     * Constructs a purchase entity by the given parameters.
     *
     * @param customer  purchase's customer
     * @param billing   billing information of the purchase
     * @param delivery  delivery address of the purchase
     * @param price     price of the purchase
     */
    public Purchase(Customer customer, Address billing, Address delivery, double price) {
        this.customer = customer;
        this.billingAddress = billing;
        this.deliveryAddress = delivery;
        this.price = price;
    }

}
