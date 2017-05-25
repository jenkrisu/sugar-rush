package com.store.entities;

import lombok.Data;

import javax.persistence.*;

/**
 * Account is an entity class for an account item in the account
 * table. It consists of account specific data.
 *
 * @author  Ville Haapavaara
 * @version 2017-04-27
 * @since   1.8
 */
@Entity
@Data
public class Account {

    /**
     * NewAccountDto id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    /**
     * Customer linked to the account
     */
    @ManyToOne(cascade = CascadeType.ALL)
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

    /**
     * Default constructor.
     */
    public Account() {

    }

    /**
     * Constructs an account entity based on the given parameters.
     *
     * @param customer  customer linked to the account
     * @param email     account's email
     * @param password  password of the account
     * @param role      role of the account
     */
    public Account(Customer customer, String email, String password, String role) {
        this.customer = customer;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
