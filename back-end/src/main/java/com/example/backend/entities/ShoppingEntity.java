package com.example.backend.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "shopping")
public class ShoppingEntity {
    @Id
    private Integer id;
    @Column
    private String code;
    @Column
    private Integer status;
    @Column
    private Integer userId;
    @Column
    private LocalDate createAt;
}
