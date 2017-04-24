package com.store.purchase;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Jenni on 24.4.2017.
 */

public interface PurchaseRowRepository extends CrudRepository<PurchaseRow, Long> {
}
