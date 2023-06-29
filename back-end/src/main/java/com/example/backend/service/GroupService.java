package com.example.backend.service;

import com.example.backend.dtos.GroupDto;
import com.example.backend.dtos.UserDto;
import com.example.backend.entities.GroupEntity;
import com.example.backend.entities.UserEntity;
import com.example.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupService {
    private final GroupRepository groupRepository;
    private final GroupMemberRepository groupMemberRepository;

    private final UserRepository userRepository;
    private final GroupShoppingRepository groupShoppingRepository;
    private final ShoppingRepository shoppingRepository;
    private final ModelMapper modelMapper;
    public List<GroupDto> getAllGroups() {
        List<GroupEntity> entities = groupRepository.findAll();
        List<GroupDto> dtos = new ArrayList<GroupDto>();
        dtos = Arrays.asList(modelMapper.map(entities,GroupDto[].class));
        for (int i = 0; i < dtos.size(); i++) {
            GroupDto dto = dtos.get(i);
            GroupEntity entity = entities.get(i);
            UserEntity user = userRepository.findById(entity.getLeader()).get();
            UserDto userDto = modelMapper.map(user,UserDto.class);
            dto.setLeader(userDto);

        }


        return dtos;

    }

}
