package com.store.repositories;

import com.store.entities.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * AccountRepository is a repository class for account entities.
 *
 * @author  Ville Haapavaara
 * @version 2017-04-27
 * @since   1.8
 */
@RepositoryRestResource
public interface AccountRepository extends CrudRepository<Account, Integer> {
}
