package com.example.backend.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "fridge_ingredients")
public class FridgeIngredientsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Integer fridgeId;
    @Column
    private Integer ingredientsId;
    @Column
    private Integer quantity;
    @Column
    private String measure;

}
