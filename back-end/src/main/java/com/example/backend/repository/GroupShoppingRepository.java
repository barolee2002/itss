package com.example.backend.repository;

import com.example.backend.entities.GroupShoppingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupShoppingRepository extends JpaRepository<GroupShoppingEntity, Integer> {
}
