package com.store.DataTransferObjects;

import lombok.Data;

import java.util.List;

/**
 * Manages receiving cart information.
 * <p>
 * Created by Jenni on 28.4.2017.
 */
@Data
public class Cart {

    /**
     * List of cart items.
     */
    private List<CartItem> items;

    /**
     * Total amount of items.
     */
    private int total;

}
