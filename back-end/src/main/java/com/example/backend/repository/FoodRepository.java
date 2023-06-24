package com.example.backend.repository;

import com.example.backend.entities.DishAttributeEntity;
import com.example.backend.entities.FoodEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<FoodEntity, Integer> {
}
