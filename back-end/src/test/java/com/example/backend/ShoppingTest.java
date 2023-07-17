package com.example.backend;

import com.example.backend.dtos.*;
import com.example.backend.entities.*;
import com.example.backend.repository.*;
import com.example.backend.service.DishService;
import com.example.backend.service.ShoppingService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static java.time.LocalTime.now;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

public class ShoppingTest {

    @Mock
    private DishService dishService;

    @Mock
    private ShoppingRepository shoppingRepository;

    @Mock
    private DishIngredientsRepository dishIngredientsRepository;

    @Mock
    private ShoppingAttributeRepository attributeRepository;

    @Mock
    private DishAttributeRepository dishAttributeRepository;

    @Mock
    private ModelMapper shoppingModelMapper;

    @Mock
    private IngredientsRepository ingredientsRepository;

    @Mock
    private GroupShoppingRepository groupShoppingRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private DishRepository dishRepository;

    @Mock
    private GroupMemberRepository groupMemberRepository;

    @InjectMocks
    private ShoppingService shoppingService;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        shoppingService = new ShoppingService(shoppingRepository,dishIngredientsRepository,attributeRepository,dishAttributeRepository, shoppingModelMapper,ingredientsRepository,groupShoppingRepository,userRepository,dishRepository,groupMemberRepository);
    }
    @Test
    public void testGetAllShoppings() {
        // Mocking dependencies
        List<ShoppingEntity> entities = new ArrayList<>();
        when(shoppingRepository.findAll()).thenReturn(entities);

        List<ShoppingDto> dtos = new ArrayList<>();
        when(shoppingModelMapper.map(entities, ShoppingDto[].class)).thenReturn(dtos.toArray(new ShoppingDto[0]));

        // Test the method
        List<ShoppingDto> result = shoppingService.getAllShoppings();

        // Verify the result
        verify(shoppingRepository).findAll();
        verify(shoppingModelMapper).map(entities, ShoppingDto[].class);
    }

    @Test
    void testGetDetailShoppingById() {
        Integer shoppingId = 1;
        ShoppingEntity entity = new ShoppingEntity();
        entity.setId(shoppingId);
        entity.setUserId(1);

        UserEntity user = new UserEntity();
        user.setId(1);

        ShoppingDto expectedDto = new ShoppingDto();
        expectedDto.setId(shoppingId);

        when(shoppingRepository.findById(shoppingId)).thenReturn(Optional.of(entity));
        when(userRepository.findById(entity.getUserId())).thenReturn(Optional.of(user));
        when(shoppingModelMapper.map(entity, ShoppingDto.class)).thenReturn(expectedDto);

        // Call the method
        ShoppingDto result = shoppingService.getDetailShoppingById(shoppingId);

        // Verify the interactions and assertions
        verify(shoppingRepository).findById(shoppingId);
        verify(userRepository).findById(entity.getUserId());
        verify(shoppingModelMapper).map(entity, ShoppingDto.class);
        assertEquals(expectedDto, result);
    }



    @Test
    public void testGetShoppingByUserId() {
        Integer userId = 1;
        List<ShoppingEntity> shoppingList = new ArrayList<ShoppingEntity>();
        List<GroupMemberEntity> groups = new ArrayList<GroupMemberEntity>();

        Mockito.when(shoppingRepository.findByUserId(userId)).thenReturn(shoppingList);
        Mockito.when(groupMemberRepository.findByUserId(userId)).thenReturn(groups);
        Mockito.when(shoppingRepository.findById(Mockito.anyInt())).thenReturn(Optional.of(new ShoppingEntity()));
        Mockito.when(userRepository.findById(Mockito.anyInt())).thenReturn(Optional.of(new UserEntity()));
        Mockito.when(shoppingModelMapper.map(Mockito.any(ShoppingEntity.class), Mockito.eq(ShoppingDto.class))).thenReturn(new ShoppingDto());
        Mockito.when(shoppingModelMapper.map(Mockito.any(UserEntity.class), Mockito.eq(UserDto.class))).thenReturn(new UserDto());

        // Act
        List<ShoppingDto> result = shoppingService.getShoppingByUserId(userId);

        // Assert
        Assertions.assertEquals(shoppingList.size(), result.size());
        Mockito.verify(shoppingRepository, Mockito.times(1)).findByUserId(userId);
        Mockito.verify(groupMemberRepository, Mockito.times(1)).findByUserId(userId);
        Mockito.verify(shoppingRepository, Mockito.times(groups.size())).findById(Mockito.anyInt());
        Mockito.verify(userRepository, Mockito.times(shoppingList.size())).findById(Mockito.anyInt());
        Mockito.verify(shoppingModelMapper, Mockito.times(shoppingList.size())).map(Mockito.any(ShoppingEntity.class), Mockito.eq(ShoppingDto.class));
        Mockito.verify(shoppingModelMapper, Mockito.times(shoppingList.size())).map(Mockito.any(UserEntity.class), Mockito.eq(UserDto.class));
    }

    @Test
    public void testDeleteShopping() {
        // Mocking dependencies
        Integer id = 1;
        List<ShoppingAttribute> shoppingAttributes = new ArrayList<>();
        when(attributeRepository.findByShoppingId(id)).thenReturn(shoppingAttributes);

        // Test the method
        shoppingService.deleteShopping(id);

        // Verify the result
        verify(attributeRepository).findByShoppingId(id);
        verify(shoppingRepository).deleteById(id);
    }



    @Test
    public void testGetByFilter() {
        // Mocking dependencies
        Integer userId = 1;
        String code = "TestCode";
        Integer status = 1;
        String minCreateAt = "2023-01-01";
        String maxCreateAt = "2023-12-31";

        when(shoppingRepository.findByFilters(anyString(), anyInt(), any(LocalDate.class), any(LocalDate.class), anyInt()))
                .thenReturn(new ArrayList<>());

        // Test the method
        List<ShoppingDto> result = shoppingService.getByFilter(userId, code, status, minCreateAt, maxCreateAt);

        // Verify the result
        verify(shoppingRepository).findByFilters(anyString(), anyInt(), any(LocalDate.class), any(LocalDate.class), anyInt());
    }


    @Test
    public void testGetAllIngredientsMeasure() {
        // Mocking dependencies
        List<String> measureList = new ArrayList<>();
        when(attributeRepository.findDistinctMeasure()).thenReturn(measureList);

        // Test the method
        List<String> result = shoppingService.getAllIngredientsMeasure();

        // Verify the result
        verify(attributeRepository).findDistinctMeasure();
    }
}
