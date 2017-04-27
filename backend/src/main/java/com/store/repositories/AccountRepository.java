package com.store.repositories;

import com.store.entities.Account;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Ville on 27.4.2017.
 */
public interface AccountRepository extends CrudRepository<Account, Integer> {
}
