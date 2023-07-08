package com.example.backend.dtos;

import lombok.Data;

import java.time.LocalDate;

@Data
public class FridgeIngredientsDto {
    IngredientsDto ingredient;
    private Integer quantity;
    private LocalDate exprided;
    private String measure;
}
