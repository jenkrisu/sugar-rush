package com.store.product;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

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
     * Datetime of addition.
     */
    @Temporal(TemporalType.TIMESTAMP)
    private Date created;

    /**
     * Title of product.
     */
    private String title;

    /**
     * Categories (bar, truffle, round)
     */
    private String categories;

    /**
     * Description of product.
     */
    @Column(columnDefinition = "TEXT")
    private String description;

    /**
     * List of ingredients.
     */
    @Column(columnDefinition = "TEXT")
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

    public Product(String title, String categories, String description, String ingredients, int weight, double price,
                   int stock, String image) {
        this.created = new Date();
        this.title = title;
        this.categories = categories;
        this.description = description;
        this.ingredients = ingredients;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }

}
