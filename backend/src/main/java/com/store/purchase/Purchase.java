package com.store.order;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Order {

    /**
     * Auto-incremented id.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;


}
