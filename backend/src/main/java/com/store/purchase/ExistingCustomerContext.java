package com.store.purchase;

import com.store.entities.Address;
import lombok.Data;

/**
 * Created by Jenni on 24.4.2017.
 */

@Data
public class ExistingCustomerContext {

    /**
     * Shopping cart.
     */
    private Cart cart;

    /**
     * Delivery address.
     */
    private Address address;

}
