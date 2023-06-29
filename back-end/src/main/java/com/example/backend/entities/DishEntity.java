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
@Table(name = "dish")
public class DishEntity extends BaseEntity {
    @Column
    private String image;
    @Column
    private String descriptions;
    @Column
    private String recipeDes;
    @Column
    private Integer status;
    @Column
    private String type;

}
