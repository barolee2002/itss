package com.example.backend.repository;

import com.example.backend.entities.FoodEntity;
import com.example.backend.entities.GroupEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<GroupEntity, Integer> {
}
