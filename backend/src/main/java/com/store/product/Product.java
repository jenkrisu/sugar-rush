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
    private Long id;

    /**
     * Title of product.
     */
    private String title;

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
     * TODO: Defines product as new.
     */
    private boolean isNew;

    // Images saved to another table
    // @
    // private Image image ?

    // Reviews saved to another table
    // @
    // private Review review ?

    public Product() {}

    public Product(String title, String description, String ingredients, int weight, double price, int stock,
                   boolean isNew) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
        this.isNew = isNew;
    }

}
