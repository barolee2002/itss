package com.example.backend.service;

import com.example.backend.dtos.FridgeDto;
import com.example.backend.entities.FridgeEntity;
import com.example.backend.entities.GroupEntity;
import com.example.backend.entities.GroupMemberEntity;
import com.example.backend.repository.FridgeIngredientsRepository;
import com.example.backend.repository.FridgeRepository;
import com.example.backend.repository.GroupMemberRepository;
import com.example.backend.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FridgeService {
//    private final GroupMemberRepository groupMemberRepository;
//    private final GroupRepository groupRepository;
//    private final FridgeRepository fridgeRepository;
//    private final FridgeIngredientsRepository fridgeIngredientsRepository;
//    private final ModelMapper modelMapper;
//    public List<FridgeDto> getFridgeDtoByUserAndGroup(Integer userId) {
//        List<GroupEntity> groups = groupRepository.findByLeader(userId);
//        List<FridgeDto> fridgeDtos = new ArrayList<FridgeDto>();
//        for(GroupMemberEntity group : groups) {
//            List<FridgeEntity> fridgeEntities = fridgeRepository.findByGroupId(group.getGroupId());
//
//        }
//    }
}
