package com.store.rest.repositories;

import com.store.customer.Customer;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jenni on 24.4.2017.
 */
public interface CustomerRepository extends CrudRepository<Customer, Long>{
}
