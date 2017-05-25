package com.store.DataTransferObjects;

import com.store.entities.Product;
import lombok.Data;

/**
 * Defines cart item.
 * <p>
 * Created by Jenni on 24.4.2017.
 */

@Data
public class CartItem {

    /**
     * Id of product.
     */
    private int id;

    /**
     * Title of product.
     */
    private String title;

    /**
     * Amount of products.
     */
    private int amount;

}
