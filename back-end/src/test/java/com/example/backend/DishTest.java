package com.example.backend;

import com.example.backend.dtos.DishDto;
import com.example.backend.dtos.DishIngredientsDto;
import com.example.backend.dtos.IngredientsDto;
import com.example.backend.entities.DishEntity;
import com.example.backend.entities.DishIngredientsEntity;
import com.example.backend.entities.FavoriteEntity;
import com.example.backend.entities.IngredientsEntity;
import com.example.backend.repository.*;
import com.example.backend.service.DishService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@SpringBootTest
class DishTest {
    @Mock
    private DishRepository dishRepository;

    @Mock
    private DishAttributeRepository attributeRepository;

    @Mock
    private DishIngredientsRepository dishIngredientRepository;

    @Mock
    private ModelMapper dishModelMapper;

    @Mock
    private FavoriteRepository favoriteRepository;

    @Mock
    private IngredientsRepository ingredientsRepository;

    @InjectMocks
    private DishService dishService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        dishService = new DishService(dishRepository, attributeRepository, dishIngredientRepository,
                dishModelMapper, favoriteRepository, ingredientsRepository);
    }

    @Test
    public void testGetAllDishes() {
        // Mocking dependencies
        List<DishEntity> dishEntities = new ArrayList<>();
        DishEntity dishEntity1 = new DishEntity();
        dishEntity1.setId(1);
        dishEntities.add(dishEntity1);
        when(dishRepository.findAll()).thenReturn(dishEntities);

        List<DishDto> expectedDtos = new ArrayList<>();
        DishDto dishDto1 = new DishDto();
        dishDto1.setId(1);
        expectedDtos.add(dishDto1);
        when(dishModelMapper.map(dishEntities, DishDto[].class)).thenReturn(expectedDtos.toArray(new DishDto[0]));

        when(favoriteRepository.findByUserIdAndRecipeId(anyInt(), anyInt())).thenReturn(null);

        // Test the method
        List<DishDto> actualDtos = dishService.getAllDishes(123);

        // Verify the result
        assertEquals(expectedDtos, actualDtos);
        verify(dishRepository).findAll();
        verify(dishModelMapper).map(dishEntities, DishDto[].class);
        verify(favoriteRepository, times(expectedDtos.size())).findByUserIdAndRecipeId(eq(123), anyInt());
    }
    @Test
    public void testGetDishDetailById() {
        // Mocking dependencies
        DishEntity dishEntity = new DishEntity();
        dishEntity.setId(1);
        when(dishRepository.findById(1)).thenReturn(java.util.Optional.of(dishEntity));

        DishDto expectedDto = new DishDto();
        expectedDto.setId(1);
        when(dishModelMapper.map(dishEntity, DishDto.class)).thenReturn(expectedDto);

        List<DishIngredientsEntity> ingredientsEntities = new ArrayList<>();
        DishIngredientsEntity ingredientEntity = new DishIngredientsEntity();
        ingredientEntity.setIngredientsId(1);
        ingredientsEntities.add(ingredientEntity);
        when(dishIngredientRepository.findByDishId(1)).thenReturn(ingredientsEntities);

        IngredientsEntity ingredientsEntity = new IngredientsEntity();
        ingredientsEntity.setId(1);
        when(ingredientsRepository.findById(1)).thenReturn(java.util.Optional.of(ingredientsEntity));

        IngredientsDto ingredientDto = new IngredientsDto();
        ingredientDto.setId(1);
        when(dishModelMapper.map(ingredientsEntity, IngredientsDto.class)).thenReturn(ingredientDto);

        // Test the method
        DishDto actualDto = dishService.getDishDetailById(1);

        // Verify the result
        assertEquals(expectedDto, actualDto);
        verify(dishRepository).findById(1);
        verify(dishModelMapper).map(dishEntity, DishDto.class);
        verify(dishIngredientRepository).findByDishId(1);
        verify(ingredientsRepository).findById(1);
        verify(dishModelMapper).map(ingredientsEntity, IngredientsDto.class);
    }

    @Test
    public void testGetDishByFilter() {
        // Mocking dependencies
        List<DishEntity> dishEntities = new ArrayList<>();
        DishEntity dishEntity1 = new DishEntity();
        dishEntity1.setId(1);
        dishEntities.add(dishEntity1);
        when(dishRepository.findByFilters("name", 1, "type")).thenReturn(dishEntities);

        List<DishDto> expectedDtos = new ArrayList<>();
        DishDto dishDto1 = new DishDto();
        dishDto1.setId(1);
        expectedDtos.add(dishDto1);
        when(dishModelMapper.map(dishEntities, DishDto[].class)).thenReturn(expectedDtos.toArray(new DishDto[0]));

        when(favoriteRepository.findByUserIdAndRecipeId(anyInt(), anyInt())).thenReturn(null);

        // Test the method
        List<DishDto> actualDtos = dishService.getDishByFilter("name", 1, "type", 123);

        // Verify the result
        assertEquals(expectedDtos, actualDtos);
        verify(dishRepository).findByFilters("name", 1, "type");
        verify(dishModelMapper).map(dishEntities, DishDto[].class);
        verify(favoriteRepository, times(expectedDtos.size())).findByUserIdAndRecipeId(eq(123), anyInt());
    }

    @Test
    public void testSave() {
        DishDto dishDto = new DishDto();
        dishDto.setName("Test Dish");
        when(dishRepository.findByName("Test Dish")).thenReturn(null);

        DishEntity savedEntity = new DishEntity();
        savedEntity.setId(1);
        when(dishRepository.save(any(DishEntity.class))).thenReturn(savedEntity);

        DishIngredientsDto ingredientDto = new DishIngredientsDto();
        ingredientDto.setIngredient(new IngredientsDto());
        dishDto.setIngredients(List.of(ingredientDto));

        when(dishModelMapper.map(any(DishDto.class), eq(DishEntity.class))).thenAnswer(invocation -> {
            DishDto dto = invocation.getArgument(0);
            DishEntity entity = new DishEntity();
            entity.setId(dto.getId());
            entity.setName(dto.getName());
            // Set other properties as needed
            entity.setCreateAt(LocalDate.now());
            return entity;
        });

        // Test the method
        dishService.save(dishDto);

        // Verify the result
        verify(dishRepository).findByName("Test Dish");
        verify(dishRepository).save(any(DishEntity.class));
        verify(dishIngredientRepository).save(any(DishIngredientsEntity.class));
    }

    @Test
    public void testGetAllDishTypes() {
        // Mocking dependencies
        List<String> expectedTypes = List.of("Type1", "Type2");
        when(dishRepository.findDistinctType()).thenReturn(expectedTypes);

        // Test the method
        List<String> actualTypes = dishService.getAllDishTypes();

        // Verify the result
        assertEquals(expectedTypes, actualTypes);
        verify(dishRepository).findDistinctType();
    }

    @Test
    public void testAddIngredientId() {
        // Mocking dependencies
        when(dishIngredientRepository.findByDishIdAndIngredientsId(1, 2)).thenReturn(null);

        // Test the method
        dishService.addIngredientId(1, 2, 100, "g");

        // Verify the result
        verify(dishIngredientRepository).findByDishIdAndIngredientsId(1, 2);
        verify(dishIngredientRepository).save(any(DishIngredientsEntity.class));
    }

    @Test
    public void testDeleteDishIngredient() {
        // Mocking dependencies
        DishIngredientsEntity dishIngredientEntity = new DishIngredientsEntity();
        when(dishIngredientRepository.findByDishIdAndIngredientsId(1, 2)).thenReturn(dishIngredientEntity);

        // Test the method
        dishService.deleteDishIngredient(1, 2);

        // Verify the result
        verify(dishIngredientRepository).findByDishIdAndIngredientsId(1, 2);
        verify(dishIngredientRepository).delete(dishIngredientEntity);
    }

    @Test
    public void testDeleteDish() {
        // Mocking dependencies
        DishEntity dishEntity = new DishEntity();
        when(dishRepository.findById(1)).thenReturn(java.util.Optional.of(dishEntity));

        // Test the method
        dishService.deleteDish(1);

        // Verify the result
        verify(dishRepository).findById(1);
        verify(dishRepository).save(dishEntity);
    }

    @Test
    public void testFindDishs() {
        // Mocking dependencies
        List<DishEntity> dishEntities = new ArrayList<>();
        DishEntity dishEntity1 = new DishEntity();
        dishEntity1.setId(1);
        dishEntities.add(dishEntity1);
        when(dishRepository.findByNameContaining("search")).thenReturn(dishEntities);

        List<DishDto> expectedDtos = new ArrayList<>();
        DishDto dishDto1 = new DishDto();
        dishDto1.setId(1);
        expectedDtos.add(dishDto1);
        when(dishModelMapper.map(dishEntities, DishDto[].class)).thenReturn(expectedDtos.toArray(new DishDto[0]));

        // Test the method
        List<DishDto> actualDtos = dishService.findDishs("search");

        // Verify the result
        assertEquals(expectedDtos, actualDtos);
        verify(dishRepository).findByNameContaining("search");
        verify(dishModelMapper).map(dishEntities, DishDto[].class);
    }

    @Test
    public void testActiveDish() {
        // Mocking dependencies
        DishEntity dishEntity = new DishEntity();
        when(dishRepository.findById(1)).thenReturn(java.util.Optional.of(dishEntity));

        // Test the method
        dishService.activeDish(1);

        // Verify the result
        verify(dishRepository).findById(1);
        verify(dishRepository).save(dishEntity);
    }
}