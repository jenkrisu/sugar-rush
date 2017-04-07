package com.store.product;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jenni on 4.4.2017.
 */

public interface ProductRepository extends JpaRepository<Product, Long> {
}
