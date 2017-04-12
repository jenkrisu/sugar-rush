package com.store.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

/**
 * Created by Jenni on 7.4.2017.
 */

@RestController
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
