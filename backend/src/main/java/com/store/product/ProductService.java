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
        productRepository.save(new Product("Dark Nut Chocolate",
                "Blend of the finest chocolate with delicate almond pieces, cashew, hazelnut, and walnut.",
                "Sugar, cocoa mass, almond, cashew, hazelnut, walnut, cocoa butter, butterfat.",
                100, 15.99, 5,
                "https://dl.dropboxusercontent.com/s/egeec0vzyv5qw83/dark-chocolate-nut.jpg?"));

        productRepository.save(new Product("Dark Fruit Chocolate",
                "Tangy orange, pineapple, and strawberry notes mix with deep intense cocoa flavours" +
                        " to strike a refreshing chord.",
                "Sugar, cocoa mass, orange pieces, pineapple pieces, strawberry peaces, cocoa butter.",
                100, 15.99, 3,
                "https://dl.dropboxusercontent.com/s/m0563cilw7zp00h/dark-chocolate-fruit.jpg"));

        productRepository.save(new Product("Dark Marshmallow Chocolate",
                "Brilliantly blended ultra-light chocolate with delicious marshmallow pieces.",
                "Sugar, cocoa mass, vegetable fat, cocoa butter.",
                150, 19.99, 5,
                "https://dl.dropboxusercontent.com/s/9bjndzqgifwfbil/dark-chocolate-marshmallow.jpg?"));

        productRepository.save(new Product("Cappuccino Truffle",
                "Espresso and creamy notes in dark chocolate ganache. ",
                "Dark chocolate, cream, espresso, sugar",
                100, 24.99, 10,
                "https://dl.dropboxusercontent.com/s/us2kt4xxgbbafnk/cappuccino-truffle.jpg"));

        productRepository.save(new Product("Vanilla Mousse Truffle",
                "Vanilla mousse ganache in a dark chocolate shell.",
                "Cream, vanilla flavour, dark chocolate, sugar",
                100, 24.99, 7,
                "https://dl.dropboxusercontent.com/s/d1cch1ck7lajasg/vanilla-mousse-truffle.jpg"));

        productRepository.save(new Product("Double Chocolate Raspberry Truffle",
                "Red and black raspberry puree combined with chocolate ganache, covered in dark chocolate.",
                "Dark chocolate, cream, sugar, red raspberry bits, black raspberry bits",
                100, 24.99, 2,
                "https://dl.dropboxusercontent.com/s/w8jl4lm9ya8upvk/double-chocolate-raspberry-truffle.jpg"));
    }
}