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
@Table(name = "user")
public class UserEntity extends BaseEntity{
    @Column
    private String username;
    @Column
    private String password;
    @Column
    private LocalDate verifiedTime;
    @Column
    private String email;
    @Column
    private Integer status;
    @Column
    private String avatar;
    @Column
    private String gender;
    @Column
    private String address;
}
