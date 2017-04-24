package com.store.purchase;

import com.store.product.Product;
import lombok.Data;

/**
 * Created by Jenni on 24.4.2017.
 */

@Data
public class CartItem {

    private int productId;
    private int productAmount;

}
