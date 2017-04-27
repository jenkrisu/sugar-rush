package com.store.entities;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Ville on 27.4.2017.
 */

@Entity
@Data
public class Account {

    /**
     * Account id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /**
     * Customer linked to the account
     */
    @OneToOne
    @JoinColumn(nullable=false)
    private Customer customer;

    /**
     * Email of the account.
     */
    private String email;

    /**
     * Password of the account.
     */
    private String password;

    /**
     * Role of the account.
     */
    private String role;
}