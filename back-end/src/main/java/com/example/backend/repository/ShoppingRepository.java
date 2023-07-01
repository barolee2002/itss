package com.example.backend.repository;

import com.example.backend.entities.DishIngredientsEntity;
import com.example.backend.entities.ShoppingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingRepository extends JpaRepository<ShoppingEntity, Integer> {
    ShoppingEntity findByCode(String code);
    List<ShoppingEntity> findByUserId(int userId);
}
