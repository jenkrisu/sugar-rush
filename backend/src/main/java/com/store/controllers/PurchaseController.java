package com.store.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.store.entities.Address;
import com.store.entities.Customer;
import com.store.entities.Purchase;
import com.store.purchase.*;
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

/**
 * Created by Jenni on 24.4.2017.
 */

@RepositoryRestController
public class PurchaseController {

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
    private ProductRepository productRepository;

    /**
     * Adds new purchase for a new customer.
     *
     * @param context
     * @return
     */
    @RequestMapping(method = RequestMethod.POST, value = "purchases/new")
    public ResponseEntity<Purchase> update(@RequestBody PurchaseContext context) {

        String cartString = context.getCart();
        Cart cart;

        try {
            cart = new ObjectMapper().readValue(cartString, Cart.class);
            System.out.println(cart.getItems().size());
            System.out.println(cart.getTotal());
        } catch (IOException ex) {
            ex.printStackTrace();
        }

        //TODO: Check for each product id in cart whether there is enough stock
        //Return error if not enough stock
        //if enough stock, try to create billing and delivery addresses, try to create customer,
        //try to create purchase, try to create purchase rows
        //if all succeeds, make stock for products smaller
        //Only persist changes to db once everything ok

        Customer customer = context.getCustomer();
        Address billingAddress = customer.getAddress();
        Address deliveryAddress = context.getDeliveryAddress();

        System.out.println(customer.getFirstName());
        System.out.println(billingAddress.getCity());
        System.out.println(deliveryAddress.getCity());

        return new ResponseEntity<Purchase>(new Purchase(), HttpStatus.OK);
    }

    /**
     * Adds new purchase for an existing customer.
     *
     * @param context
     * @return
     */
    @RequestMapping(method = RequestMethod.POST, value = "/purchases/existing")
    public ResponseEntity<Purchase> update(@RequestHeader(value="Bearer") String token,
                                           @RequestBody PurchaseContext context) {
        //TODO: Id of customer from token?
        return new ResponseEntity<Purchase>(new Purchase(), HttpStatus.OK);
    }

}