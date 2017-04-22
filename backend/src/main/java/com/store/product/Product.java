package com.store.product;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Jenni on 4.4.2017.
 */
@Entity
@Data
public class Product {

    /**
     * Auto-incremented id for product.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    /**
     * Title of product.
     */
    private String title;

    /**
     * Category (bar, truffle, round)
     */
    private String category;

    /**
     * Description of product.
     */
    private String description;

    /**
     * List of ingredients.
     */
    private String ingredients;

    /**
     * Weight of product in grams.
     */
    private int weight;

    /**
     * Price of product in euros.
     */
    private double price;

    /**
     * Stock of product.
     */
    private int stock;

    /**
     * Image url.
     */
    private String image;

    public Product() {}

    public Product(String title, String category, String description, String ingredients, int weight, double price,
                   int stock, String image) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.ingredients = ingredients;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }

}
