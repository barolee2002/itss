package com.example.backend.repository;

import com.example.backend.entities.DishAttributeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishAttributeRepository extends JpaRepository<DishAttributeEntity, Integer> {
    List<DishAttributeEntity> findByDishId(Integer id);

}
