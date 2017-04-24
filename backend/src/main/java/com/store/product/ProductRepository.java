package com.store.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by Jenni on 4.4.2017.
 */

@RepositoryRestResource
public interface ProductRepository extends JpaRepository<Product, Long> {
}
