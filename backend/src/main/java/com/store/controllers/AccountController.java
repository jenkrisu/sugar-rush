package com.store.controllers;

;
import com.store.DataTransferObjects.NewAccountDto;
import com.store.entities.Account;
import com.store.entities.Customer;
import com.store.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by Ville on 27.4.2017.
 */
@RepositoryRestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void createAccount(@RequestBody @Validated NewAccountDto account) {
        accountRepository.save(new Account(new Customer(account.getFirstName(), account.getLastName(),
                account.getEmail()),account.getEmail(), account.getPassword(), account.getRole()));
    }
}
