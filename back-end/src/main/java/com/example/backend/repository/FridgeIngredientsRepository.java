package com.example.backend.repository;

import com.example.backend.entities.FridgeEntity;
import com.example.backend.entities.FridgeIngredientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FridgeIngredientsRepository extends JpaRepository<FridgeIngredientsEntity, Integer> {


}
