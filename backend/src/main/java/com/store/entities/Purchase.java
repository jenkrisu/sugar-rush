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
    private Long Id;

    /**
     * Foreign key customer_id.
     */
    @OneToOne(cascade=CascadeType.ALL)
    @JoinColumn(nullable=false)
    private Customer customer;

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
