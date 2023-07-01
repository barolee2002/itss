package com.example.backend.service;

import com.example.backend.dtos.DishAttributeDto;
import com.example.backend.dtos.DishDto;
import com.example.backend.dtos.IngredientsDto;
import com.example.backend.entities.DishAttributeEntity;
import com.example.backend.entities.DishEntity;
import com.example.backend.entities.DishIngredientsEntity;
import com.example.backend.entities.IngredientsEntity;
import com.example.backend.exception.DuplicateException;
import com.example.backend.repository.DishAttributeRepository;
import com.example.backend.repository.DishIngredientsRepository;
import com.example.backend.repository.DishRepository;
import com.example.backend.repository.IngredientsRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.*;

import static java.time.LocalDate.now;

@Service
@RequiredArgsConstructor
public class DishService {
    private final DishRepository dishRepository;
    private final DishAttributeRepository attributeRepository;
    private final DishIngredientsRepository dishIngredientRepository;
    private final ModelMapper dishModelMapper;
    private final IngredientsRepository ingredientsRepository;
    public List<DishDto> getAllDishes() {
        List<DishDto> dtos = new ArrayList<DishDto>();
        List<DishEntity> entities = dishRepository.findAll();
      

        dtos = Arrays.asList(dishModelMapper.map(entities,DishDto[].class));
        return dtos;

    }
    public DishDto getDishDetailById(Integer id) {
        DishEntity entity = dishRepository.findById(id).get();
        DishDto dto = new DishDto();
        List<IngredientsDto> ingredientsDtos = new ArrayList<IngredientsDto>();
        List<DishAttributeDto> attributeDtos = new ArrayList<DishAttributeDto>();
        dto = dishModelMapper.map(entity, DishDto.class);
        List<DishIngredientsEntity> ingredients = dishIngredientRepository.findByDishId(entity.getId());
        for(DishIngredientsEntity ingredient : ingredients) {
            IngredientsEntity ingredientsEntity = ingredientsRepository.findById(ingredient.getIngredientsId()).get();
            IngredientsDto ingredientDto = new IngredientsDto();
            ingredientDto = dishModelMapper.map(ingredientsEntity, IngredientsDto.class);
            ingredientsDtos.add(ingredientDto);
        }


        dto.setIngredients(ingredientsDtos);
        return dto;
    }
    public List<DishDto> getDishByFilter(String name, Integer status,String type) {
        List<DishDto> dtos = new ArrayList<DishDto>();

        List<DishEntity> entities = dishRepository.findByFilters(name,status,type);
        dtos = Arrays.asList(dishModelMapper.map(entities,DishDto[].class));
        return dtos;
    }

    public void save(DishDto dishDto) {
        if(dishRepository.findByName(dishDto.getName()) != null) {
            throw new DuplicateException("Đã có món ăn này ");
        }
        DishEntity entity = dishModelMapper.map(dishDto, DishEntity.class);
        entity.setCreateAt(now());
        entity = dishRepository.save(entity);
        System.out.println(entity.getId());
        for(IngredientsDto ingredient : dishDto.getIngredients()) {
            DishIngredientsEntity dishIngredient = new DishIngredientsEntity();
            dishIngredient.setDishId(entity.getId());
            dishIngredient.setIngredientsId(ingredient.getId());
            dishIngredientRepository.save(dishIngredient);
        }
    }
    public List<String> getAllDishTypes() {
        return dishRepository.findDistinctType();
    }
    public void addIngredientId(Integer id,Integer ingredientId) {
        DishIngredientsEntity dishIngredient = new DishIngredientsEntity();
        if(dishIngredientRepository.findByDishIdAndIngredientsId(id, ingredientId) != null) {
            throw new DuplicateException("Đã có nguyên liệu này ");
        } else {
            dishIngredient.setDishId(id);
            dishIngredient.setIngredientsId(ingredientId);
            dishIngredientRepository.save(dishIngredient);
        }

    }
    public void deleteDishIngredient(Integer id,Integer ingredientId) {
        DishIngredientsEntity dishIngredient = new DishIngredientsEntity();
        dishIngredient = dishIngredientRepository.findByDishIdAndIngredientsId(id, ingredientId);
        dishIngredientRepository.delete(dishIngredient);

    }
    public void deleteDish(Integer id) {
        DishEntity entity = dishRepository.findById(id).get();
        entity.setStatus(0);
        dishRepository.save(entity);
    }
    public List<DishDto> findDishs(String search) {
        List<DishDto> dtos = new ArrayList<DishDto>();
        List<DishEntity> entities = dishRepository.findByNameContaining(search);
        dtos = Arrays.asList(dishModelMapper.map(entities,DishDto[].class));
        return dtos;
    }
    public void activeDish(Integer id) {
        DishEntity entity = dishRepository.findById(id).get();
        entity.setUpdateAt(now());
        entity.setStatus(1);
        dishRepository.save(entity);
    }


}
