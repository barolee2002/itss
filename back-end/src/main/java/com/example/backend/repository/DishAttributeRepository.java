package com.example.backend.repository;

import com.example.backend.entities.DishAttributeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DishAttributeRepository extends JpaRepository<DishAttributeEntity, Integer> {
}
