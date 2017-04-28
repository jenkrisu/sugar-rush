package com.store.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.store.ApiError;
import com.store.DataTransferObjects.*;
import com.store.entities.*;
import com.store.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Jenni on 24.4.2017.
 */

@RepositoryRestController
public class PurchaseController {

    @Autowired
    /**
     * Gets instance of AddresssRepository.
     */
    private AddressRepository addressRepository;

    /**
     * Gets instance of PurchaseRepository.
     */
    @Autowired
    private PurchaseRepository purchaseRepository;

    /**
     * Gets instance of PurchaseRowRepository.
     */
    @Autowired
    private PurchaseRowRepository purchaseRowRepository;

    /**
     * Gets instance of CustomerRepository.
     */
    @Autowired
    private CustomerRepository customerRepository;

    /**
     * Gets instance of ProductRepository.
     */
    @Autowired
    private ProductRepository productRepository;

    /**
     * Adds new purchase. If customer not logged in, value of Bearer is an empty string.
     *
     * @param context
     * @return
     */
    @RequestMapping(method = RequestMethod.POST, value = "purchases")
    public ResponseEntity<Object> update(@RequestHeader(value = "Bearer") String token,
                                         @RequestBody PurchaseContext context) {
        String cartString = context.getCart();
        CustomerDto c = context.getCustomer();
        AddressDto b = c.getAddress();
        AddressDto d = context.getDeliveryAddress();

        if (cartString == null || c == null || b == null || d == null) {
            ApiError error = new ApiError(HttpStatus.BAD_REQUEST.value(),
                    "Invalid request.", context.getCart());
            return new ResponseEntity<Object>(error, HttpStatus.BAD_REQUEST);
        }

        // Try to parse string to Cart object
        Cart cart;
        try {
            cart = new ObjectMapper().readValue(cartString, Cart.class);
        } catch (IOException ex) {
            ex.printStackTrace();
            ApiError error = new ApiError(HttpStatus.BAD_REQUEST.value(),
                    "Could not read shopping cart.", context.getCart());
            return new ResponseEntity<Object>(error, HttpStatus.BAD_REQUEST);
        }

        // Send response "Bad Request" if cart is empty
        if (cart.getItems().size() == 0) {
            ApiError error = new ApiError(HttpStatus.BAD_REQUEST.value(),
                    "No items in shopping cart.", context.getCart());
            return new ResponseEntity<Object>(error, HttpStatus.BAD_REQUEST);
        }

        // Confirm that there is enough stock, return 404 if not enough
        for (int i = 0; i < cart.getItems().size(); i++) {
            CartItem item = cart.getItems().get(i);
            Product p = productRepository.findOne(item.getId());

            if (p == null) {
                ApiError error = new ApiError(HttpStatus.NOT_FOUND.value(),
                        "Product " + item.getTitle() + " not found.", item);
                return new ResponseEntity<Object>(error, HttpStatus.NOT_FOUND);
            }

            if (p.getStock() < item.getAmount()) {
                ApiError error = new ApiError(HttpStatus.NOT_FOUND.value(),
                        "Stock of " + item.getTitle() + " is " + p.getStock() + ".", item);
                return new ResponseEntity<Object>(error, HttpStatus.NOT_FOUND);
            }
        }

        // Save customer and addresses
        // TODO: customer id from token
        boolean newCustomer = true;

        Customer customer;
        if (newCustomer) {
            customer = customerRepository
                    .save(new Customer(c.getFirstName(), c.getLastName(), c.getEmail()));
        } else {
            int id = 1;
            customer = customerRepository.findOne(id);
        }

        Address billing = addressRepository
                .save(new Address(b.getStreet(), b.getCity(), b.getPostal(), b.getCountry(), customer));

        Address delivery = addressRepository
                .save(new Address(d.getStreet(), d.getCity(), d.getPostal(), d.getCountry(), customer));

        // Create purchase
        Purchase purchase = purchaseRepository
                .save(new Purchase(customer, billing, delivery, calculatePurchasePrice(cart)));

        for (int i = 0; i < cart.getItems().size(); i++) {
            CartItem item = cart.getItems().get(i);
            Product product = productRepository.findOne(item.getId());
            purchaseRowRepository.save(new PurchaseRow(purchase, product, item.getAmount()));
        }

        // Decrease stock
        decreaseStock(cart);

        return new ResponseEntity<Object>(purchase, HttpStatus.OK);
    }

    /**
     * Decrease stock according to purchase.
     *
     * @param cart
     */
    private void decreaseStock(Cart cart) {
        int length = cart.getItems().size();
        for (int i = 0; i < length; i++) {
            CartItem item = cart.getItems().get(i);
            Product p = productRepository.findOne(item.getId());
            int newStock = p.getStock() - item.getAmount();
            p.setStock(newStock);
            productRepository.save(p);
        }
    }


    /**
     * Calculate purchase price.
     *
     * @param cart
     * @return double price
     */
    private double calculatePurchasePrice(Cart cart) {
        double price = 0;
        int length = cart.getItems().size();

        for (int i = 0; i < length; i++) {
            CartItem item = cart.getItems().get(i);
            Product p = productRepository.findOne(item.getId());
            double factorial = p.getPrice() * item.getAmount();
            price += factorial;
        }

        return price;
    }

}