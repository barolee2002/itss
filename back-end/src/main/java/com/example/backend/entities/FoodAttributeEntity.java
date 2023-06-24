package com.example.backend.entities;

import jakarta.validation.constraints.*;
import lombok.Data;


import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Entity;


import java.util.Date;

@Entity
@Data
@Table(name = "food_attribute")
public class FoodAttributeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Integer userId;
    @Column
    private LocalDate buyAt;
    @Column
    private String status;
    @Column
    private String buyAddress;
    @Column
    private String measure;
    @Column
    private Integer quantity;
}
