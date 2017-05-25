package com.store.DataTransferObjects;

import lombok.Data;


/**
 * Manages receiving customer information.
 * <p>
 * Created by Jenni on 24.4.2017.
 */

@Data
public class CustomerDto {

    private AddressDto address;

    /**
     * First name of the customer.
     */
    private String firstName;

    /**
     * Last name of the customer.
     */
    private String lastName;

    /**
     * Email of the customer.
     */
    private String email;

}
