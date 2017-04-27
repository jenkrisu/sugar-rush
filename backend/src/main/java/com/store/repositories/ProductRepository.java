package com.store.repositories;

import com.store.entities.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by Jenni on 4.4.2017.
 */

@RepositoryRestResource
public interface ProductRepository extends CrudRepository<Product, Integer> {
}
