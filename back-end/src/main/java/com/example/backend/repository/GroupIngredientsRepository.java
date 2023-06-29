package com.example.backend.repository;

import com.example.backend.entities.GroupIngredientsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupIngredientsRepository extends JpaRepository<GroupIngredientsEntity, Integer> {
}
