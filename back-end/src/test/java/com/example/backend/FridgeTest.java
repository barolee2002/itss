package com.example.backend;

import com.example.backend.dtos.FridgeDto;
import com.example.backend.dtos.GroupDto;
import com.example.backend.dtos.UserDto;
import com.example.backend.entities.*;
import com.example.backend.exception.NotCanDoException;
import com.example.backend.repository.*;
import com.example.backend.service.FridgeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class FridgeTest {

    @Mock
    private GroupMemberRepository groupMemberRepository;
    @Mock
    private GroupRepository groupRepository;
    @Mock
    private FridgeRepository fridgeRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private FridgeIngredientsRepository fridgeIngredientsRepository;
    @Mock
    private IngredientsRepository ingredientRepository;
    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private FridgeService fridgeService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        fridgeService = new FridgeService(groupMemberRepository, groupRepository,fridgeRepository,userRepository,fridgeIngredientsRepository,ingredientRepository,modelMapper);
    }


    @Test
    public void testUseIngredient_QuantityAvailable() {
        // Arrange
        Integer fridgeIngredientId = 1;
        Integer quantityUsed = 5;
        FridgeIngredientsEntity entity = new FridgeIngredientsEntity();
        entity.setQuantity(10);

        when(fridgeIngredientsRepository.findById(fridgeIngredientId)).thenReturn(Optional.of(entity));

        // Act
        assertDoesNotThrow(() -> fridgeService.useIngredient(fridgeIngredientId, quantityUsed));

        // Assert

        verify(fridgeIngredientsRepository).findById(fridgeIngredientId);
        verify(fridgeIngredientsRepository).save(entity);
    }

    @Test
    public void testUseIngredient_QuantityUnavailable() {
        // Arrange
        Integer fridgeIngredientId = 1;
        Integer quantityUsed = 15;
        FridgeIngredientsEntity entity = new FridgeIngredientsEntity();
        entity.setQuantity(10);

        when(fridgeIngredientsRepository.findById(fridgeIngredientId)).thenReturn(Optional.of(entity));

        // Act & Assert
        assertThrows(NotCanDoException.class, () -> fridgeService.useIngredient(fridgeIngredientId, quantityUsed));
        verify(fridgeIngredientsRepository).findById(fridgeIngredientId);
        verify(fridgeIngredientsRepository, never()).save(any(FridgeIngredientsEntity.class));
    }

    @Test
    public void testDeleteFridge() {
        // Arrange
        Integer id = 1;

        // Act
        assertDoesNotThrow(() -> fridgeService.deleteFridge(id));

        // Assert
        verify(fridgeRepository).deleteById(id);
    }

    @Test
    public void testAddNewFridge_WithUser() {
        // Arrange
        FridgeDto newFridgeDto = new FridgeDto();
        newFridgeDto.setUser(new UserDto());

        FridgeEntity newFridgeEntity = new FridgeEntity();
        newFridgeEntity.setUserId(newFridgeDto.getUser().getId());

        when(modelMapper.map(newFridgeDto, FridgeEntity.class)).thenReturn(newFridgeEntity);

        // Act
        assertDoesNotThrow(() -> fridgeService.addNewFridge(newFridgeDto));

        // Assert
        verify(fridgeRepository).save(newFridgeEntity);
    }

    @Test
    public void testAddNewFridge_WithGroup() {
        // Arrange
        FridgeDto newFridgeDto = new FridgeDto();
        newFridgeDto.setGroup(new GroupDto());

        FridgeEntity newFridgeEntity = new FridgeEntity();
        newFridgeEntity.setGroupId(newFridgeDto.getGroup().getId());

        when(modelMapper.map(newFridgeDto, FridgeEntity.class)).thenReturn(newFridgeEntity);

        // Act
        assertDoesNotThrow(() -> fridgeService.addNewFridge(newFridgeDto));

        // Assert
        verify(fridgeRepository).save(newFridgeEntity);
    }



    @Test
    public void testAddIngredients_NewEntity() {
        // Arrange
        Integer ingredientId = 1;
        Integer fridgeId = 1;
        Integer quantity = 5;
        String measure = "g";
        LocalDate now = LocalDate.now();

        IngredientsEntity ingredientsEntity = new IngredientsEntity();
        ingredientsEntity.setDueDate(7);

        FridgeIngredientsEntity newEntity = new FridgeIngredientsEntity();
        newEntity.setIngredientsId(ingredientId);
        newEntity.setFridgeId(fridgeId);
        newEntity.setQuantity(quantity);
        newEntity.setMeasure(measure);
        newEntity.setCreateAt(now);

        when(ingredientRepository.findById(ingredientId)).thenReturn(Optional.of(ingredientsEntity));
        when(fridgeIngredientsRepository.findByFridgeIdAndIngredientsIdAndMeasureAndCreateAt(fridgeId, ingredientId, measure, now)).thenReturn(null);
        when(fridgeIngredientsRepository.save(any(FridgeIngredientsEntity.class))).thenReturn(newEntity);

        // Act
        assertDoesNotThrow(() -> fridgeService.addIngredients(ingredientId, fridgeId, quantity, measure));

        // Assert
        verify(ingredientRepository).findById(ingredientId);
        verify(fridgeIngredientsRepository).findByFridgeIdAndIngredientsIdAndMeasureAndCreateAt(fridgeId, ingredientId, measure, now);

//        verify(fridgeIngredientsRepository, never()).save(any(FridgeIngredientsEntity.class));
    }

    @Test
    public void testAddNewIngredientToFridge() {
        // Arrange
        Integer ingredientId = 1;
        Integer fridgeId = 1;
        Integer quantity = 5;
        String measure = "g";
        LocalDate now = LocalDate.now();

        IngredientsEntity ingredientsEntity = new IngredientsEntity();
        ingredientsEntity.setDueDate(7);

        FridgeIngredientsEntity newEntity = new FridgeIngredientsEntity();
        newEntity.setIngredientsId(ingredientId);
        newEntity.setFridgeId(fridgeId);
        newEntity.setQuantity(quantity);
        newEntity.setMeasure(measure);
        newEntity.setCreateAt(now);

        when(ingredientRepository.findById(ingredientId)).thenReturn(Optional.of(ingredientsEntity));
        when(fridgeIngredientsRepository.save(any(FridgeIngredientsEntity.class))).thenReturn(newEntity);

        // Act
        assertDoesNotThrow(() -> fridgeService.addNewIngredientToFridge(ingredientId, fridgeId, quantity, measure));

        // Assert
        verify(ingredientRepository).findById(ingredientId);

    }

    @Test
    public void testAutoDeleteIngredient_QuantityZero() {
        // Arrange
        Integer id = 1;
        FridgeIngredientsEntity entity = new FridgeIngredientsEntity();
        entity.setId(id);
        entity.setQuantity(0);

        when(fridgeIngredientsRepository.findById(id)).thenReturn(Optional.of(entity));

        // Act
        assertDoesNotThrow(() -> fridgeService.autoDeleteIngredient(id));

        // Assert
        verify(fridgeIngredientsRepository).findById(id);
        verify(fridgeIngredientsRepository).deleteById(entity.getId());
    }

    @Test
    public void testAutoDeleteIngredient_QuantityNonZero() {
        // Arrange
        Integer id = 1;
        FridgeIngredientsEntity entity = new FridgeIngredientsEntity();
        entity.setId(id);
        entity.setQuantity(5);

        when(fridgeIngredientsRepository.findById(id)).thenReturn(Optional.of(entity));

        // Act
        assertDoesNotThrow(() -> fridgeService.autoDeleteIngredient(id));

        // Assert
        verify(fridgeIngredientsRepository).findById(id);
        verify(fridgeIngredientsRepository, never()).deleteById(any(Integer.class));
    }

}
