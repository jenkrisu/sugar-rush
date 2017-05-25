package com.store.controllers;

import com.store.repositories.CustomerRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controls customer repository.
 * <p>
 * Created by Ville on 27.4.2017.
 */
@RepositoryRestController
@RequestMapping("/customers")
public class CustomerController {

    private CustomerRepository customerRepository;

}
