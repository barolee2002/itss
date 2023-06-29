package com.example.backend.dtos;

import lombok.Data;

import java.time.LocalDate;
import java.util.List;
@Data
public class ShoppingDto {
    private Integer id;
    private String code;
    private LocalDate createAt;
    private Integer userId;
    private Integer status;
    List<ShoppingAttributeDto> attributes;
    List<DishAttributeDto> dishes;
}
