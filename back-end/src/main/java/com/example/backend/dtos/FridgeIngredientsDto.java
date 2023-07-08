package com.example.backend.dtos;

import lombok.Data;

@Data
public class FridgeIngredientsDto {
    IngredientsDto ingredient;
    private Integer quantity;
    private String measure;
}
