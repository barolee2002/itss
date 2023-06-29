package com.example.backend.service;

import com.example.backend.dtos.*;
import com.example.backend.entities.*;
import com.example.backend.exception.DuplicateException;
import com.example.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.time.LocalDate.now;

@Service
@RequiredArgsConstructor
public class ShoppingService {
    private final ShoppingRepository shoppingRepository;
    private final ShoppingAttributeRepository attributeRepository;
    private final DishAttributeRepository dishAttributeRepository;
    private final ModelMapper shoppingModelMapper;
    private final IngredientsRepository ingredientsRepository;
    private final UserRepository userRepository;
    private final DishRepository dishRepository;
    public List<ShoppingDto> getAllShoppings() {
        List<ShoppingDto> dtos = new ArrayList<ShoppingDto>();
        List<ShoppingEntity> entities = shoppingRepository.findAll();
        dtos = Arrays.asList(shoppingModelMapper.map(entities, ShoppingDto[].class));
        return dtos;
    }
    public ShoppingDto getDetailShoppingById(Integer id) {
        ShoppingDto shoppingDto = new ShoppingDto();
        ShoppingEntity entity = shoppingRepository.findById(id).get();
        shoppingDto = shoppingModelMapper.map(entity, ShoppingDto.class);
        List<ShoppingAttributeDto> attributeDtos = new ArrayList<ShoppingAttributeDto>();
        List<ShoppingAttribute> attributes = attributeRepository.findByShoppingId(entity.getId());
        for(ShoppingAttribute attribute : attributes) {
            ShoppingAttributeDto attributeDto = new ShoppingAttributeDto();
            attributeDto = shoppingModelMapper.map(attribute,ShoppingAttributeDto.class);
            UserDto userDto = new UserDto();
            UserEntity user = userRepository.findById(attribute.getUserId()).get();
            if(user != null) {
                userDto = shoppingModelMapper.map(user, UserDto.class);
            }
            IngredientsEntity ingredientsEntity = ingredientsRepository.findById(attribute.getIngredientsId()).get();
            IngredientsDto ingredientsDto = shoppingModelMapper.map(ingredientsEntity, IngredientsDto.class);
            System.out.println(ingredientsDto);
            attributeDto.setUser(userDto);
            attributeDto.setIngredients(ingredientsDto);
            attributeDtos.add(attributeDto);

        }
        List<DishAttributeDto> dishAttributeDtos = new ArrayList<DishAttributeDto>();
        List<DishAttributeEntity> dishAttributes = dishAttributeRepository.findByShoppingId(id);
        for(DishAttributeEntity dishAttribute : dishAttributes) {
            DishAttributeDto dishAttributeDto = shoppingModelMapper.map(dishAttribute,DishAttributeDto.class);
            DishEntity dish = dishRepository.findById(dishAttribute.getDishId()).get();
            DishDto dishDto = shoppingModelMapper.map(dish, DishDto.class);
            dishAttributeDto.setDish(dishDto);
            dishAttributeDtos.add(dishAttributeDto);
        }
        shoppingDto.setDishes(dishAttributeDtos);
        shoppingDto.setAttributes(attributeDtos);

        return shoppingDto;
    }
    public void addShopping(ShoppingDto shoppingDto) {
        if(shoppingRepository.findByCode(shoppingDto.getCode()) != null){
            throw new DuplicateException("Mã đi chợ trùng lặp");
        } else {


        ShoppingEntity entity = shoppingModelMapper.map(shoppingDto, ShoppingEntity.class);
        entity.setCreateAt(now());
        entity.setStatus(0);
        shoppingRepository.save(entity);
        for(ShoppingAttributeDto attributeDto : shoppingDto.getAttributes()) {
            ShoppingAttribute attribute = new ShoppingAttribute();
            attribute = shoppingModelMapper.map(attributeDto,ShoppingAttribute.class);
            attribute.setShoppingId(shoppingDto.getId());
            attribute.setUserId(attributeDto.getUser().getId());
            attribute.setStatus(0);
            attribute.setIngredientsId(attributeDto.getIngredients().getId());
            attributeRepository.save(attribute);
        }
        for(DishAttributeDto dishAttributeDto : shoppingDto.getDishes()) {
            DishAttributeEntity dishAttribute = new DishAttributeEntity();
            dishAttribute = shoppingModelMapper.map(dishAttributeDto,DishAttributeEntity.class);
            dishAttribute.setShoppingId(entity.getId());
            dishAttribute.setDishId(dishAttributeDto.getDish().getId());
            dishAttribute.setCookStatus(0);
            dishAttribute.setCreateAt(now());
            dishAttributeRepository.save(dishAttribute);
        }
        }
    }
    public void deleteShopping(Integer id){
        shoppingRepository.deleteById(id);
    }

}
