package com.store.purchase;

import com.store.product.Product;
import lombok.Data;

import javax.persistence.*;

/**
 * Created by Jenni on 24.4.2017.
 */

@Entity
@Data
public class PurchaseRow {

    /**
     * Auto-incremented id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

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

}
