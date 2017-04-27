package com.store.repositories;

import com.store.entities.Customer;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jenni on 24.4.2017.
 */
public interface CustomerRepository extends CrudRepository<Customer, Integer>{
}
