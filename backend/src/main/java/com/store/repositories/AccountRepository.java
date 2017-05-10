package com.store.repositories;

import com.store.entities.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by Ville on 27.4.2017.
 */
@RepositoryRestResource
public interface AccountRepository extends CrudRepository<Account, Integer> {
}
