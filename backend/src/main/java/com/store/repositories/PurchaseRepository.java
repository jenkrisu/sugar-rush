package com.store.repositories;

import com.store.entities.Purchase;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

/**
 * Created by Jenni on 24.4.2017.
 */
@RepositoryRestResource
public interface PurchaseRepository extends CrudRepository<Purchase, Long> {

    /**
     * Prevents deleting purchase.
     * @param id Purchase id
     */
    @Override
    @RestResource(exported = false)
    void delete(Long id);

    /**
     * Prevents deleting purchase.
     * @param purchase Purchase
     */
    @Override
    @RestResource(exported = false)
    void delete(Purchase purchase);

    /**
     * Prevent deleting purchases.
     * @param purchases
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