package com.example.backend.repository;

import com.example.backend.entities.IngredientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientsRepository extends JpaRepository<IngredientsEntity, Integer> {
    IngredientsEntity findByName(String name);
}
