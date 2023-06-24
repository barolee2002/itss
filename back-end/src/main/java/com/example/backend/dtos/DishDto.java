package com.example.backend.dtos;

import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.List;

public class DishDto {
    private String name;
    private String description;
    private Integer status;
    private String type;
    private LocalDate createAt;
    private LocalDate updateAt;
    private List<DishAttributeDto> attributes;


}
