package com.store.repositories;

import com.store.entities.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * AddressRepository is a repository class for address entities.
 *
 * @author  Ville Haapavaara
 * @version 2017-04-27
 * @since   1.8
 */
@RepositoryRestResource
public interface AddressRepository extends CrudRepository<Address, Integer> {
}
