package com.store.repositories;

import com.store.entities.PurchaseRow;
import org.springframework.data.repository.CrudRepository;

/**
 * PurchaseRowRepository is a repository class for purchase row entities.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-24
 * @since   1.8
 */
public interface PurchaseRowRepository extends CrudRepository<PurchaseRow, Integer> {
}
