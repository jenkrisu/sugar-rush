package com.store.purchase;

import com.store.entities.Address;
import com.store.entities.Customer;
import lombok.Data;

/**
 * Created by Jenni on 24.4.2017.
 */

@Data
public class PurchaseContext {

    /**
     * Contains billing address.
     */
    private Customer customer;
    
    /**
     * Shopping cart.
     */
    private String cart;

    /**
     * Delivery address.
     */
    private Address deliveryAddress;

}
