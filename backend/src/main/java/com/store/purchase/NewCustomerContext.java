package com.store.purchase;

import com.store.entities.Address;
import com.store.entities.Customer;
import lombok.Data;

/**
 * Created by Jenni on 24.4.2017.
 */

@Data
public class NewCustomerContext {

    private Customer customer;
    private String cart;
    private Address address;

}
