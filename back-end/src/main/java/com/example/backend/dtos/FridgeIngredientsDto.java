package com.example.backend.dtos;

import lombok.Data;

@Data
public class FridgeIngredientsDto {
    IngredientsDto ingredientsDto;
    private Integer quantity;
    private String measure;
}
