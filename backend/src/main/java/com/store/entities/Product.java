package com.store.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * Product is an entity class for a product item for the product table.
 * It consists of product related data.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-4
 * @since   1.8
 */
@Entity
@Data
public class Product {

    /**
     * Auto-incremented id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

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

    /**
     * Default constructor.
     */
    public Product() {}

    /**
     * Constructs a product by the given parameters.
     *
     * @param title         product's title
     * @param categories    product's categories
     * @param description   product's description
     * @param ingredients   product's ingredients
     * @param weight        product's weight
     * @param price         product's price
     * @param stock         product's stock amount
     * @param image         product's image url
     */
    public Product(String title, String categories, String description, String ingredients, int weight, double price,
                   int stock, String image) {
        this.title = title;
        this.categories = categories;
        this.description = description;
        this.ingredients = ingredients;
        this.weight = weight;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }

    /**
     * Adds datetime.
     */
    @PrePersist
    private void createdAt() {
        created = new Date();
    }

}
