package com.example.backend.repository;

import com.example.backend.entities.DishAttributeEntity;
import com.example.backend.entities.DishEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<DishEntity, Integer> {
    DishEntity findByName(String name);
    List<DishEntity> findByNameContaining(String name);
}
