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
@Table(name = "group_table")
public class GroupEntity extends BaseEntity{
    @Column
    private Integer leader;
    @Column
    private String image;
}
