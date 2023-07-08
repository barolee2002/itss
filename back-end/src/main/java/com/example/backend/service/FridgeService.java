package com.example.backend.service;

import com.example.backend.dtos.*;
import com.example.backend.entities.*;
import com.example.backend.exception.NotCanDoException;
import com.example.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FridgeService {
    private final GroupMemberRepository groupMemberRepository;
    private final GroupRepository groupRepository;
    private final FridgeRepository fridgeRepository;
    private final UserRepository userRepository;
    private final FridgeIngredientsRepository fridgeIngredientsRepository;
    private final IngredientsRepository ingredientRepository;
    private final ModelMapper modelMapper;
//    public List<FridgeDto> getFridgeDtoByUserAndGroup(Integer userId) {
//        List<GroupEntity> groups = groupRepository.findByLeader(userId);
//        List<FridgeDto> fridgeDtos = new ArrayList<FridgeDto>();
//        for(GroupMemberEntity group : groups) {
//            List<FridgeEntity> fridgeEntities = fridgeRepository.findByGroupId(group.getGroupId());
//
//        }
//    }
    public List<FridgeDto> getAllFridgeByGroup(Integer groupId) {
        List<FridgeEntity> fridges = fridgeRepository.findByGroupId(groupId);
        List<FridgeDto> fridgeDtoList = Arrays.asList(modelMapper.map(fridges, FridgeDto[].class));
        GroupEntity group = groupRepository.findById(groupId).get();
         GroupDto groupDto = modelMapper.map(group, GroupDto.class);

        UserEntity leader = userRepository.findById(group.getLeader()).get();
        UserDto userDto = modelMapper.map(leader, UserDto.class);
        groupDto.setLeader(userDto);
        for(FridgeDto fridgeDto : fridgeDtoList) {
            fridgeDto.setGroup(groupDto);
        }


        return fridgeDtoList;
    }
    public FridgeDto getDetailFridge(Integer id) {
        FridgeEntity entity = fridgeRepository.findById(id).get();
        FridgeDto dto = new FridgeDto();
        dto = modelMapper.map(entity,FridgeDto.class);
        GroupEntity groupEntity = groupRepository.findById(entity.getGroupId()).get();
        GroupDto groupDto = modelMapper.map(groupEntity,GroupDto.class);
        UserEntity leader = userRepository.findById(groupEntity.getLeader()).get();
        UserDto userDto = modelMapper.map(leader, UserDto.class);
        groupDto.setLeader(userDto);
        dto.setGroup(groupDto);
        List<FridgeIngredientsDto> ingredientsDtos = new ArrayList<FridgeIngredientsDto>();
        List<FridgeIngredientsEntity> ingredients = fridgeIngredientsRepository.findByFridgeId(id);
        for(FridgeIngredientsEntity ingredientFridge : ingredients) {
            IngredientsEntity ingredient = ingredientRepository.findById(ingredientFridge.getIngredientsId()).get();
            IngredientsDto ingredientsDto = modelMapper.map(ingredient,IngredientsDto.class);
            FridgeIngredientsDto fridgeDto = modelMapper.map(ingredientFridge, FridgeIngredientsDto.class);
            fridgeDto.setIngredientsDto(ingredientsDto);
            ingredientsDtos.add(fridgeDto);
        }
        dto.setIngredients(ingredientsDtos);
        return dto;
    }
    public void useIngredient(Integer fridgeIngredientId, Integer quantityUsed) {
        FridgeIngredientsEntity entity = fridgeIngredientsRepository.findById(fridgeIngredientId).get();
        if(entity.getQuantity() < quantityUsed) {
            throw  new NotCanDoException("Trong tủ lạnh chỉ còn " + entity.getQuantity() + " " + entity.getMeasure());
        }
        entity.setQuantity(entity.getQuantity() - quantityUsed);
        fridgeIngredientsRepository.save(entity);
    }
    public void deleteFridge(Integer id) {
        fridgeRepository.deleteById(id);
    }
    public void addNewFridge(FridgeDto newFridge) {
        FridgeEntity newFridgeEntity = modelMapper.map(newFridge,FridgeEntity.class);
        if(newFridge.getUser() != null) {
            newFridgeEntity.setUserId(newFridge.getUser().getId());
        } else {
            newFridgeEntity.setGroupId(newFridge.getGroup().getId());
        }
        fridgeRepository.save(newFridgeEntity);
    }
    public void addIngredients(Integer ingredientId,Integer fridgeId,Integer quantity, String measure) {
        FridgeIngredientsEntity oldEntity = fridgeIngredientsRepository.findByFridgeIdAndIngredientsIdAndMeasure(fridgeId,ingredientId,measure);
        if(oldEntity != null) {
            oldEntity.setQuantity(oldEntity.getQuantity() + quantity);
            fridgeIngredientsRepository.save(oldEntity);
        } else {
            FridgeIngredientsEntity ingredientEntity = new FridgeIngredientsEntity();
            ingredientEntity.setIngredientsId(ingredientId);
            ingredientEntity.setFridgeId(fridgeId);
            ingredientEntity.setQuantity(quantity);
            ingredientEntity.setMeasure(measure);
        }
    }
    public void autoDeleteIngredient(Integer id) {
        FridgeIngredientsEntity entity = fridgeIngredientsRepository.findById(id).get();
        if(entity.getQuantity() == 0) {
            fridgeIngredientsRepository.deleteById(id);
        }
    }
}
