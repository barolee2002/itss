package com.example.backend.repository;

import com.example.backend.entities.IngredientsEntity;
import com.example.backend.entities.ShoppingAttribute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShoppingAttributeRepository extends JpaRepository<ShoppingAttribute, Integer> {
    List<ShoppingAttribute> findByShoppingId(Integer id);
    ShoppingAttribute findByShoppingIdAndIngredientsIdAndMeasure(Integer id, Integer ingredientsId,String measure);

    @Query("SELECT DISTINCT p.measure FROM ShoppingAttribute p")
    List<String> findDistinctMeasure();
}
