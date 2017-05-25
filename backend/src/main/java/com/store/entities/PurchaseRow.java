package com.store.entities;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Jenni on 24.4.2017.
 */

/**
 * Purchase is an entity class for a purchase item for the purchase table.
 * It consists of purchase related data.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-4
 * @since   1.8
 */
@Entity
@Data
public class PurchaseRow {

    /**
     * Auto-incremented id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    /**
     * Foreign key purchase_id.
     */
    @OneToOne
    @JoinColumn(nullable=false)
    private Purchase purchase;

    /**
     * Foreign key product_id.
     */
    @OneToOne
    @JoinColumn(nullable=false)
    private Product product;

    /**
     * Amount of product.
     */
    private int amount;

    /**
     * Default constructor.
     */
    public PurchaseRow() {}

    /**
     * Constructs a purchase row by the given parameters.
     *
     * @param purchase  purchase related to the purchase row
     * @param product   product of the purchase row
     * @param amount    amount of the product related to the purchase row
     */
    public PurchaseRow(Purchase purchase, Product product, int amount) {
        this.purchase = purchase;
        this.product = product;
        this.amount = amount;
    }

}
