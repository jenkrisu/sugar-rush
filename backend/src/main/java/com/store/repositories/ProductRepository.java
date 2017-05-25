package com.store.repositories;

import com.store.entities.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * ProductRepository is a repository class for product entities.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-04
 * @since   1.8
 */
@RepositoryRestResource
public interface ProductRepository extends CrudRepository<Product, Integer> {
}
