package com.example.backend.entities;
import lombok.Data;


import javax.persistence.*;

import javax.persistence.Entity;

@Entity
@Data
@Table(name = "group_ingredients")
public class GroupIngredientsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer id;
    @Column
    private Integer groupId;
    @Column
    private Integer ingredientsId;
}
