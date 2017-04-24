package com.store.purchase;

import com.store.customer.CustomerRepository;
import com.store.product.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
     * Adds new purchase for a new customer.
     * @param context
     * @return
     */
    // localhost:8080/api/purchases/new
    // { "customer": {"firstName": "", "lastName": "", "billingStreet": "", "billingPostal": "", "billingCity": "", "billingCountry": "", "deliveryStreet": "", "deliveryPostal": "", "deliveryCity": "", "deliveryCountry": "", "email": "jou"}, "cart": {"items": "{\"something\": \"something\"}", "total": 8} }
    @RequestMapping(method = RequestMethod.POST, value = "purchases/new")
    public ResponseEntity<Purchase> update(@RequestBody NewCustomerContext context) {
        System.out.println(context.getCustomer().getEmail());
        return new ResponseEntity<Purchase>(new Purchase(), HttpStatus.OK);
    }

    /**
     * Adds new purchase for an existing customer.
     * @param context
     * @return
     */
    // localhost:8080/api/purchases/old
    // { "id": 1, "cart": {"items": "{\"something\": \"something\"}", "total": 8} }
    @RequestMapping(method = RequestMethod.POST, value = "/purchases/old")
    public ResponseEntity<Purchase> update(@RequestBody ExistingCustomerContext context) {
        String items = context.getCart().getItems();
        int amount = context.getCart().getTotal();
        System.out.println(items + "," + amount);
        return new ResponseEntity<Purchase>(new Purchase(), HttpStatus.OK);
    }

}