package com.example.backend.repository;

import com.example.backend.entities.DishAttributeEntity;
import com.example.backend.entities.FridgeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FridgeRepository extends JpaRepository<FridgeEntity, Integer> {
     List<FridgeEntity> findByGroupId(Integer groupId);
     List<FridgeEntity> findByUserId(Integer userId);
}
