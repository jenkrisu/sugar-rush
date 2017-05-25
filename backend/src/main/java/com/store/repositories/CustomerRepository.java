package com.store.repositories;

import com.store.entities.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * CustomerRepository is a repository class for customer entities.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-24
 * @since   1.8
 */
@RepositoryRestResource
public interface CustomerRepository extends CrudRepository<Customer, Integer>{
}
