package com.store.purchase;

import com.store.entities.Product;
import lombok.Data;

/**
 * Created by Jenni on 24.4.2017.
 */

@Data
public class CartItem {

    /**
     * Id of product.
     */
    private int id;

    /**
     * Amount of products.
     */
    private int amount;

}
