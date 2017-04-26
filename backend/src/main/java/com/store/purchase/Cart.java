package com.store.purchase;
import lombok.Data;

import java.util.List;

/**
 * Created by Jenni on 24.4.2017.
 */
@Data
public class Cart {

    private String items;
    private int total;

    public Cart() {

    }

}
