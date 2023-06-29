package com.example.backend.service;

import com.example.backend.dtos.IngredientsDto;
import com.example.backend.entities.IngredientsEntity;
import com.example.backend.exception.DuplicateException;
import com.example.backend.repository.IngredientsRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.time.LocalDate.now;

@Service
@RequiredArgsConstructor
public class IngredientsService {
    private final IngredientsRepository ingredientsRepository;
    private final ModelMapper ingredientsModelMapper;

    public List<IngredientsDto> getAllIngredients() {
        List<IngredientsDto> dtos = new ArrayList<IngredientsDto>();
        List<IngredientsEntity> entities = ingredientsRepository.findAll();


        dtos = Arrays.asList(ingredientsModelMapper.map(entities,IngredientsDto[].class));
        return dtos;
    }
    public void addIngredient(IngredientsDto ingredientsDto) {
        if(ingredientsRepository.findByName(ingredientsDto.getName())!= null) {
            throw new DuplicateException("Đã có nguyên liệu này ");
        }
        IngredientsEntity entity = ingredientsModelMapper.map(ingredientsDto, IngredientsEntity.class);
        entity.setStatus(1);
        entity.setCreateAt(now());
        ingredientsRepository.save(entity);
    }
    public void deleteIngredient(Integer id) {
        IngredientsEntity entity = ingredientsRepository.findById(id).get();
        entity.setStatus(0);
        ingredientsRepository.save(entity);
    }
}