package com.example.backend.controller;

import com.example.backend.dtos.ShoppingDto;
import com.example.backend.entities.ShoppingEntity;
import com.example.backend.service.ShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@Validated
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:3000")
public class ShoppingController {
    @Autowired
    private ShoppingService shoppingService;
    @GetMapping("/shoppings")
    public List<ShoppingDto> getAllShoppings() {
        List<ShoppingDto> response = shoppingService.getAllShoppings();
        return response;
    }
    @GetMapping("/shopping/user/{id}")
    public List<ShoppingDto> getShoppingById(@PathVariable Integer id) {
        List<ShoppingDto> response = shoppingService.getShoppingByUserId(id);
        return response;
    }
    @GetMapping("/shopping/{id}")
    public ShoppingDto getDetailShoppingById(@PathVariable Integer id) {
        ShoppingDto response = shoppingService.getDetailShoppingById(id);
        return response;
    }
    @GetMapping("/shopping/filter/{userId}")
    public List<ShoppingDto> getShoppingByAttributeId(
            @PathVariable Integer userId,
            @RequestParam(name = "code",required = false) String code,
            @RequestParam(name = "status",required = false) Integer status,
            @RequestParam(name = "minCreateAt",required = false) String minCreateAt,
            @RequestParam(name = "maxCreateAt",required = false) String maxCreateAt
            ) {
        List<ShoppingDto> response = shoppingService.getByFilter(userId,code,status,minCreateAt,maxCreateAt);
        return response;
    }
    @GetMapping("/shopping/group/{id}")
    public List<ShoppingDto> getShoppingsByGroup(@PathVariable Integer id)  {
        return shoppingService.getShoppingByGroupId(id);
    }
    @PostMapping("/shopping")
    public String addShopping(@RequestBody ShoppingDto shoppingDto) {
        shoppingService.addShopping(shoppingDto);
        return "success";
    }
    @PutMapping("/shopping/update")
    public String updateShopping(@RequestBody ShoppingDto shoppingDto) {
        shoppingService.updateShopping(shoppingDto);
        return "success";
    }
    @PutMapping("/shopping/{id}/{attributeId}")
    public String updateShoppingAttribute(@PathVariable Integer id, @PathVariable Integer attributeId) {
        shoppingService.updateShoppingAttribute(id, attributeId);
        return "success";
    }
    @PutMapping("shopping/remove/{id}/{attributeId}")
    public String removeShoppingAttribute(@PathVariable Integer id, @PathVariable Integer attributeId) {
        shoppingService.removeUpdateShoppingAttribute(id, attributeId);
        return "success";
    }
    @DeleteMapping("/shopping/{id}")
    public String deleteShopping(@PathVariable Integer id) {
        shoppingService.deleteShopping(id);
        return "success";
    }
}
