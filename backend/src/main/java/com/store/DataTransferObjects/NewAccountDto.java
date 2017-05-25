package com.store.DataTransferObjects;

import lombok.Data;

/**
 * Created by Ville on 28.4.2017.
 */
@Data
public class NewAccountDto {

    /**
     * Customer's email
     */
    private String email;

    /**
     * Customers password
     */
    private String password;

    /**
     * Customers role
     */
    private String role;

    /**
     * First name
     */
    private String firstName;

    /**
     * Last name
     */
    private String lastName;

}
