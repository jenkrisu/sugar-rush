package com.store.DataTransferObjects;

import lombok.Data;

/**
 * Created by Jenni on 24.4.2017.
 */

@Data
public class PurchaseContext {

    /**
     * Contains billing address.
     */
    private CustomerDto customer;
    
    /**
     * Shopping cart.
     */
    private String cart;

    /**
     * Delivery address.
     */
    private AddressDto deliveryAddress;

}
