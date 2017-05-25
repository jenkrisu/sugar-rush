package com.store.DataTransferObjects;

import lombok.Data;

/**
 * Manages receiving address information.
 * <p>
 * Created by Jenni on 28.4.2017.
 */
@Data
public class AddressDto {

    /**
     * Street.
     */
    private String street;

    /**
     * City
     */
    private String city;

    /**
     * Post code
     */
    private String postal;

    /**
     * Country
     */
    private String country;

    /**
     * Creates address dto.
     */
    public AddressDto() {
    }

}
