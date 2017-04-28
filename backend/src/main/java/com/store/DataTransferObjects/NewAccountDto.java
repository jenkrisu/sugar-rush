package com.store.DataTransferObjects;

import lombok.Data;

/**
 * Created by Ville on 28.4.2017.
 */
@Data
public class NewAccountDto {

    private String email;
    private String password;
    private String role;
    private String firstName;
    private String lastName;
}
