package com.store.repositories;

import com.store.entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by Jenni on 24.4.2017.
 */
@RepositoryRestResource
public interface CustomerRepository extends CrudRepository<Customer, Integer>{
}
