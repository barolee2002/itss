package com.example.backend.repository;

import com.example.backend.entities.DishIngredientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<DishIngredientsEntity, Integer> {
}
