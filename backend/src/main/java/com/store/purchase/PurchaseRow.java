package com.store.order;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Jenni on 24.4.2017.
 */

@Entity
@Data
public class OrderRow {

    /**
     * Auto-incremented id.
     */
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    /**
     * TODO: foreign key orderId, one to one
     */

    /**
     * TODO: foreign key productId, one to one
     */

    /**
     * Amount of product.
     */
    private int amount;

    public OrderRow() {}

}
