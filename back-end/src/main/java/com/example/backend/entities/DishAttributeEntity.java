package com.example.backend.entities;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.w3c.dom.Text;


import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Entity;


import java.util.Date;

@Entity
@Data

@Table(name = "dish_attribute")
public class DishAttributeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private Integer dishId;
    @Column
    private Integer quantity;
    @Column
    private Integer shoppingId;
    @Column
    private LocalDate expride;

    @Column
    private Integer cookStatus;
    @Column
    private LocalDate cookDate;
    @Column
    private LocalDate createAt;
    @Column
    private LocalDate updateAt;

}
