package com.example.backend.controller;

import com.example.backend.dtos.FridgeDto;
import com.example.backend.service.FridgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@Validated
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:3000")
public class FridgeController {
    @Autowired
    FridgeService fridgeService;
    @GetMapping("/fridge/group/{id}")
    public List<FridgeDto> getAllFridgeByGroup(@PathVariable Integer id) {
        return fridgeService.getAllFridgeByGroup(id);
    }
    @GetMapping("/fridge/{id}")
    public FridgeDto getDetailFridge(@PathVariable Integer id) {
        return fridgeService.getDetailFridge(id);
    }
    @PutMapping("fridge/use-ingredient")
    public String useIngredient(@RequestBody Map<String , Object> request) {
        Integer id = (Integer) request.get("id");
        Integer quantityUsed = (Integer) request.get("quantityUsed");
        fridgeService.useIngredient(id,quantityUsed);
        return "success";
    }
    @DeleteMapping("fridge/{id}")
    public String deleteDetailFridge(@PathVariable Integer id) {
        fridgeService.deleteFridge(id);
        return "success";
    }
    @PostMapping("/fridge")
    public String addNewFridge(@RequestBody FridgeDto newFridge) {
        fridgeService.addNewFridge(newFridge);
        return "success";

    }
    @PostMapping("/fridge/ingredients")
    public String addNewIngredient(@RequestBody Map<String , Object> request) {
        Integer fridgeId = (Integer) request.get("fridgeId");
        Integer ingredientId = (Integer) request.get("ingredientId");
        Integer quantity = (Integer) request.get("quantity");
        String measure = (String) request.get("measure");
        fridgeService.addIngredients(fridgeId, ingredientId, quantity,measure);
        return "success";
    }
    @DeleteMapping("/fridge/ingredients/{id}")
    public String autoDeleteIngredient(Integer id) {
        fridgeService.autoDeleteIngredient(id);
        return "success";
    }
}
