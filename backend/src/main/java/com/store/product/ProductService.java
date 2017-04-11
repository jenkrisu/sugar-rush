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
        productRepository.save(new Product("Dark Cranberry Chocolate", "Blend of the finest dark chocolate with delicate cranberry pieces perfectly balanced with almond slivers.", "Sugar, cocoa mass, cranberry, almond, cocoa butter, butterfat.", 100, 15.99, 5));
        productRepository.save(new Product("Dark Orange Chocolate", "Tangy orange marmalade notes mix with deep intense cocoa flavours to strike a refreshing chord.", "Sugar, cocoa mass, almonds, orange pieces, cocoa butter, milk fat.", 100, 15.99, 3));
        productRepository.save(new Product("Mousse Dark Chocolate", "Brilliantly blended ultra-light chocolate mousse with exquisite dark chocolate.", "Sugar, cocoa mass, vegetable fat, cocoa butter, hazelnuts, whole milk powder.", 150, 19.99, 5));
        productRepository.save(new Product("Cappuccino Truffle", "Espresso and creamy notes in dark chocolate ganache. ", "Dark chocolate, cream, espresso, sugar", 100, 24.99, 10));
        productRepository.save(new Product("Vanilla Mousse Truffle", "Vanilla mousse ganache in a dark chocolate shell. ", "Cream, vanilla flavour, dark chocolate, sugar", 100, 24.99, 7));
        productRepository.save(new Product("Double Chocolate Raspberry Truffle", "Red and black raspberry puree combined with chocolate ganache, covered in dark chocolate.", "Dark chocolate, cream, sugar, red raspberry bits, black raspberry bits", 100, 24.99, 2));
    }
}