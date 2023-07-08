package com.example.backend.repository;

import com.example.backend.entities.FridgeEntity;
import com.example.backend.entities.FridgeIngredientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FridgeIngredientsRepository extends JpaRepository<FridgeIngredientsEntity, Integer> {
    List<FridgeIngredientsEntity> findByIngredientsId(Integer id);
    List<FridgeIngredientsEntity> findByFridgeId(Integer id);

    FridgeIngredientsEntity findByFridgeIdAndIngredientsIdAndMeasure(Integer fridgeId, Integer ingredientsId, String measure);

}
