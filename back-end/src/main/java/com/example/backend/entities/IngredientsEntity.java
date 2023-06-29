package com.example.backend.entities;

import lombok.Data;


import javax.persistence.*;

import javax.persistence.Entity;

@Entity
@Data
@Table(name = "ingredients")
public class IngredientsEntity extends BaseEntity{
    @Column
    private String image;
    @Column
    private String description;
    @Column
    private Integer dueDate;
    @Column
    private Integer status;
}
