package com.example.backend.controller;

import com.example.backend.dtos.DishDto;
import com.example.backend.dtos.IngredientsDto;
import com.example.backend.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Validated
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:3000")
public class DishController {
    @Autowired
    private DishService dishService;
    @GetMapping("/dishs")
    public List<DishDto> getAllDishes() {
        return dishService.getAllDishes();
    }
    @GetMapping("/dishs/{id}")
    public DishDto getDishDetailById(@PathVariable Integer id) {
        return dishService.getDishDetailById(id);
    }
    @PostMapping("/dish")
    public String addDish(@RequestBody DishDto dishDto) {

        dishService.save(dishDto);
        return "success";
    }
    @PostMapping("/dish/{id}/{ingredientId}")
    public String updateDish(@PathVariable Integer id, @PathVariable Integer ingredientId) {
        dishService.addIngredientId(id, ingredientId);
        return "success";
    }
    @GetMapping("/ingredients")
    public List<IngredientsDto> getAllIngredients() {
        return dishService.getAllIngredients();
    }
}
