package com.store.purchase;

import lombok.Data;

import java.util.List;

/**
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
