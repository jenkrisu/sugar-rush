package com.store.repositories;

import com.store.entities.Purchase;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

/**
 * PurchaseRepository is a repository class for purchase entities.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-24
 * @since   1.8
 */
@RepositoryRestResource
public interface PurchaseRepository extends CrudRepository<Purchase, Integer> {

    /**
     * Prevents deleting purchase.
     * @param id purchase id
     */
    @Override
    @RestResource(exported = false)
    void delete(Integer id);

    /**
     * Prevents deleting purchase.
     * @param purchase purchase
     */
    @Override
    @RestResource(exported = false)
    void delete(Purchase purchase);

    /**
     * Prevent deleting purchases.
     * @param purchases purchases
     */
    @Override
    @RestResource(exported = false)
    void delete(Iterable<? extends Purchase> purchases);

    /**
     * Prevent deleting purchases.
     */
    @Override
    @RestResource(exported = false)
    void deleteAll();

}