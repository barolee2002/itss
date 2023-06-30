package com.example.backend.dtos;

import lombok.Data;

import java.util.List;

@Data
public class FridgeDto {
    private String name;
    GroupDto group;
    UserDto user;
    private String type;
    List<FridgeIngredientsDto> ingredients;
}
