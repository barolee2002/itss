package com.example.backend.repository;

import com.example.backend.entities.ShoppingAttribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingAttributeRepository extends JpaRepository<ShoppingAttribute, Integer> {
}
