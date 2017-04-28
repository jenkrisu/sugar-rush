package com.store.DataTransferObjects;

import lombok.Data;

/**
 * Created by Jenni on 28.4.2017.
 */
@Data
public class AddressDto {

    private String street;
    private String city;
    private String postal;
    private String country;

    public AddressDto() {}

}
