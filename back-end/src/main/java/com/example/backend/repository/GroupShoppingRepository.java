package com.example.backend.repository;

import com.example.backend.entities.GroupShoppingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupShoppingRepository extends JpaRepository<GroupShoppingEntity, Integer> {
    GroupShoppingEntity findByShoppingIdAndGroupId (Integer shoppingId,Integer groupId);
    List<GroupShoppingEntity> findByGroupId(Integer id);
}
