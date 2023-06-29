package com.example.backend.repository;

import com.example.backend.entities.ShoppingAttribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingAttributeRepository extends JpaRepository<ShoppingAttribute, Integer> {
    List<ShoppingAttribute> findByShoppingId(Integer id);
}
