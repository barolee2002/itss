package com.example.backend;

import com.example.backend.dtos.IngredientsDto;
import com.example.backend.entities.IngredientsEntity;
import com.example.backend.repository.IngredientsRepository;
import com.example.backend.service.IngredientsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class IngredientsTest {
    private IngredientsService ingredientsService;

    @Mock
    private IngredientsRepository ingredientsRepository;

    @Mock
    private ModelMapper ingredientsModelMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        ingredientsService = new IngredientsService(ingredientsRepository, ingredientsModelMapper);
    }

    @Test
    public void testGetAllIngredients() {
        // Mocking dependencies
        List<IngredientsEntity> ingredientsEntities = new ArrayList<>();
        IngredientsEntity ingredientsEntity1 = new IngredientsEntity();
        ingredientsEntity1.setId(1);
        ingredientsEntities.add(ingredientsEntity1);
        when(ingredientsRepository.findAll()).thenReturn(ingredientsEntities);

        List<IngredientsDto> expectedDtos = new ArrayList<>();
        IngredientsDto ingredientsDto1 = new IngredientsDto();
        ingredientsDto1.setId(1);
        expectedDtos.add(ingredientsDto1);
        when(ingredientsModelMapper.map(ingredientsEntities, IngredientsDto[].class))
                .thenReturn(expectedDtos.toArray(new IngredientsDto[0]));

        // Test the method
        List<IngredientsDto> actualDtos = ingredientsService.getAllIngredients();

        // Verify the result
        assertEquals(expectedDtos, actualDtos);
        verify(ingredientsRepository).findAll();
        verify(ingredientsModelMapper).map(ingredientsEntities, IngredientsDto[].class);
    }

    @Test
    public void testAddIngredient() {
        // Mocking dependencies
        IngredientsDto ingredientsDto = new IngredientsDto();
        ingredientsDto.setName("Test Ingredient");
        when(ingredientsRepository.findByName("Test Ingredient")).thenReturn(null);

        IngredientsEntity savedEntity = new IngredientsEntity();
        savedEntity.setId(1);
        when(ingredientsRepository.save(any(IngredientsEntity.class))).thenReturn(savedEntity);

        when(ingredientsModelMapper.map(any(IngredientsDto.class), eq(IngredientsEntity.class))).thenAnswer(invocation -> {
            IngredientsDto dto = invocation.getArgument(0);
            IngredientsEntity entity = new IngredientsEntity();
            entity.setId(dto.getId());
            entity.setName(dto.getName());
            // Set other properties as needed
            entity.setStatus(1);
            entity.setCreateAt(LocalDate.now());
            return entity;
        });

        // Test the method
        ingredientsService.addIngredient(ingredientsDto);

        // Verify the result
        verify(ingredientsRepository).findByName("Test Ingredient");
        verify(ingredientsRepository).save(any(IngredientsEntity.class));
    }

    @Test
    public void testDeleteIngredient() {
        // Mocking dependencies
        IngredientsEntity ingredientsEntity = new IngredientsEntity();
        when(ingredientsRepository.findById(1)).thenReturn(java.util.Optional.of(ingredientsEntity));

        // Test the method
        ingredientsService.deleteIngredient(1);

        // Verify the result
        verify(ingredientsRepository).findById(1);
        verify(ingredientsRepository).save(ingredientsEntity);
    }

    @Test
    public void testActiveIngredient() {
        // Mocking dependencies
        IngredientsEntity ingredientsEntity = new IngredientsEntity();
        when(ingredientsRepository.findById(1)).thenReturn(java.util.Optional.of(ingredientsEntity));

        // Test the method
        ingredientsService.activeIngredient(1);

        // Verify the result
        verify(ingredientsRepository).findById(1);
        verify(ingredientsRepository).save(ingredientsEntity);
    }

    @Test
    public void testGetIngredientByFilter() {
        // Mocking dependencies
        List<IngredientsEntity> ingredientsEntities = new ArrayList<>();
        IngredientsEntity ingredientsEntity1 = new IngredientsEntity();
        ingredientsEntity1.setId(1);
        ingredientsEntities.add(ingredientsEntity1);
        when(ingredientsRepository.findByFilters("name", 1)).thenReturn(ingredientsEntities);

        List<IngredientsDto> expectedDtos = new ArrayList<>();
        IngredientsDto ingredientsDto1 = new IngredientsDto();
        ingredientsDto1.setId(1);
        expectedDtos.add(ingredientsDto1);
        when(ingredientsModelMapper.map(ingredientsEntities, IngredientsDto[].class))
                .thenReturn(expectedDtos.toArray(new IngredientsDto[0]));

        // Test the method
        List<IngredientsDto> actualDtos = ingredientsService.getIngredientByFilter("name", 1);

        // Verify the result
        assertEquals(expectedDtos, actualDtos);
        verify(ingredientsRepository).findByFilters("name", 1);
        verify(ingredientsModelMapper).map(ingredientsEntities, IngredientsDto[].class);
    }

    @Test
    public void testUpdateIngredient() {
        // Mocking dependencies
        IngredientsEntity ingredientsEntity = new IngredientsEntity();
        when(ingredientsRepository.findById(1)).thenReturn(java.util.Optional.of(ingredientsEntity));

        IngredientsDto ingredientDto = new IngredientsDto();
        ingredientDto.setName("Updated Ingredient");

        // Test the method
        ingredientsService.updateIngredient(1, ingredientDto);

        // Verify the result
        verify(ingredientsRepository).findById(1);
        verify(ingredientsRepository).save(ingredientsEntity);
        assertEquals("Updated Ingredient", ingredientsEntity.getName());
    }
}
