package com.example.backend.dtos;

import java.time.LocalDate;
import java.util.List;

public class ShoppingDto {
    private String code;
    private LocalDate createAt;
    private Integer userId;
    private Integer status;
    List<ShoppingAttributeDto> attributes;
}
