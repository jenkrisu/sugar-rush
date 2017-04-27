package com.store.controllers;

import com.store.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Ville on 27.4.2017.
 */
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;
}
