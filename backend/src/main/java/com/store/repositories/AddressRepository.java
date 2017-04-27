package com.store.repositories;

import com.store.entities.Address;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Ville on 27.4.2017.
 */
public interface AddressRepository extends CrudRepository<Address, Integer> {
}
