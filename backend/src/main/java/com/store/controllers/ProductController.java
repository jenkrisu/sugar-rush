package com.store.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import javax.annotation.PostConstruct;

/**
 * Controls product repository.
 * <p>
 * Created by Jenni on 7.4.2017.
 */

@RepositoryRestController
public class ProductController {

    /**
     * Gets instance of ProductService.
     */
    @Autowired
    private ProductService productService;

    /**
     * Calls ProductService for populating database.
     */
    @PostConstruct
    public void init() {
        productService.populateDatabase();
    }

}
