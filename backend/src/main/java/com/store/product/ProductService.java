package com.store.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Jenni on 7.4.2017.
 */

@Service
public class ProductService {

    /**
     * Gets instance of ProductRepository.
     */
    @Autowired
    private ProductRepository productRepository;

    /**
     * Populates database.
     */
    public void populateDatabase() {
        productRepository.save(new Product("Dark Cranberry Chocolate", "Blend of the finest dark chocolate with delicate cranberry pieces perfectly balanced with almond slivers.", "Sugar, cocoa mass, cranberry, almond, cocoa butter, butterfat.", 100, 15.99, 5, true));
        productRepository.save(new Product("Dark Orange Chocolate", "Tangy orange marmalade notes mix with deep intense cocoa flavours to strike a refreshing chord.", "Sugar, cocoa mass, almonds, orange pieces, cocoa butter, milk fat.", 100, 15.99, 3, true));
        productRepository.save(new Product("Mousse Dark Chocolate", "Brilliantly blended ultra-light chocolate mousse with exquisite dark chocolate.", "Sugar, cocoa mass, vegetable fat (shea, palm), cocoa butter, hazelnuts, whole milk powder.", 150, 19.99, 5, true));
    }

}
