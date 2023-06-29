package com.example.backend.repository;

import com.example.backend.entities.DishAttributeEntity;
import com.example.backend.entities.DishEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishRepository extends JpaRepository<DishEntity, Integer> {
    DishAttributeEntity findByName(String name);
}
