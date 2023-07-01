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
    @GetMapping("/dishs/search")
    public List<DishDto> getDishByName(@RequestParam("searchString") String searchString) {
        return dishService.findDishs(searchString);
    }
    @GetMapping("/dishs/filter")
    public List<DishDto> getDishByFilter(
            @RequestParam(name = "name" ,required = false) String name,
            @RequestParam(name = "status" ,required = false) Integer status,
            @RequestParam(name = "type",required = false) String type

    ) {
        return dishService.getDishByFilter(name,status,type);
    }

    @GetMapping("/dish_type")
    public List<String> getAllDishTypes() {
        return dishService.getAllDishTypes();
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
    @PutMapping("/dish/{id}")
    public String updateDish(@PathVariable Integer id) {
        dishService.activeDish(id);
        return "success";
    }
    @DeleteMapping("/dish/{id}")
    public String deleteDish (@PathVariable Integer id) {
        dishService.deleteDish(id);
        return "success";
    }
    @DeleteMapping("/dish_ingredient/{id}/{ingredientId}")
    public String deleteDishIngredient(@PathVariable Integer id, @PathVariable Integer ingredientId) {
        dishService.deleteDishIngredient(id,ingredientId);
        return "success";
    }


}
