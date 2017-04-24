package com.store.purchase;
import lombok.Data;

import java.util.List;

/**
 * Created by Jenni on 24.4.2017.
 */
@Data
public class Cart {

    private List<CartItem> items;
    private int total;

}
