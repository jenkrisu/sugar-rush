package com.store;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Jenni on 4.4.2017.
 */
@Entity
@Data
public class Product {

    @Id
    @GeneratedValue
    private int id;

    private String title;

}
