package com.example.backend.entities;
import lombok.Data;


import javax.persistence.*;

import javax.persistence.Entity;

@Entity
@Data
@Table(name = "group_shopping")
public class GroupShoppingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    @Column
    private Integer groupId;
    @Column
    private Integer shoppingId;
}
