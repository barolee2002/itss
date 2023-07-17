package com.example.backend;

import com.example.backend.dtos.GroupDto;
import com.example.backend.dtos.UserDto;
import com.example.backend.entities.*;
import com.example.backend.exception.DuplicateException;
import com.example.backend.exception.NotCanDoException;
import com.example.backend.repository.*;
import com.example.backend.service.GroupService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class GroupTest {
    @Mock
    private GroupRepository groupRepository;
    @Mock
    private GroupMemberRepository groupMemberRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private ShoppingRepository shoppingRepository;
    @Mock
    private GroupShoppingRepository groupShoppingRepository;
    @Mock
    private FridgeRepository fridgeRepository;
    @Mock
    private FridgeIngredientsRepository ingredientsRepository;
    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private GroupService groupService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }


    @Test
    void shareShopping_ShouldThrowDuplicateException_WhenGroupShoppingExists() {
        // Arrange
        int shoppingId = 1;
        int groupId = 1;
        ShoppingEntity shoppingEntity = new ShoppingEntity();
        GroupEntity groupEntity = new GroupEntity();
        GroupShoppingEntity groupShoppingEntity = new GroupShoppingEntity();

        when(shoppingRepository.findById(shoppingId)).thenReturn(Optional.of(shoppingEntity));
        when(groupRepository.findById(groupId)).thenReturn(Optional.of(groupEntity));
        when(groupShoppingRepository.findByShoppingIdAndGroupId(shoppingId, groupId)).thenReturn(groupShoppingEntity);

        // Act & Assert
        assertThrows(DuplicateException.class, () -> groupService.shareShopping(shoppingId, groupId));
        verify(shoppingRepository, times(1)).findById(shoppingId);
        verify(groupRepository, times(1)).findById(groupId);
        verify(groupShoppingRepository, times(1)).findByShoppingIdAndGroupId(shoppingId, groupId);
        verify(groupShoppingRepository, never()).save(any(GroupShoppingEntity.class));
    }

    @Test
    void shareShopping_ShouldSaveNewGroupShopping_WhenGroupShoppingDoesNotExist() {
        // Arrange
        int shoppingId = 1;
        int groupId = 1;
        ShoppingEntity shoppingEntity = new ShoppingEntity();
        GroupEntity groupEntity = new GroupEntity();

        when(shoppingRepository.findById(shoppingId)).thenReturn(Optional.of(shoppingEntity));
        when(groupRepository.findById(groupId)).thenReturn(Optional.of(groupEntity));
        when(groupShoppingRepository.findByShoppingIdAndGroupId(shoppingId, groupId)).thenReturn(null);

        // Act
        groupService.shareShopping(shoppingId, groupId);

        // Assert
        verify(shoppingRepository, times(1)).findById(shoppingId);
        verify(groupRepository, times(1)).findById(groupId);
        verify(groupShoppingRepository, times(1)).findByShoppingIdAndGroupId(shoppingId, groupId);
        verify(groupShoppingRepository, times(1)).save(any(GroupShoppingEntity.class));
    }

    @Test
    void deleteMember_ShouldDeleteGroupMember() {
        // Arrange
        int groupId = 1;
        int userId = 1;
        GroupMemberEntity groupMemberEntity = new GroupMemberEntity();
        groupMemberEntity.setId(1);

        when(groupMemberRepository.findByGroupIdAndUserId(groupId, userId)).thenReturn(groupMemberEntity);

        // Act
        groupService.deleteMember(groupId, userId);

        // Assert
        verify(groupMemberRepository, times(1)).findByGroupIdAndUserId(groupId, userId);
        verify(groupMemberRepository, times(1)).deleteById(groupMemberEntity.getId());
    }

    @Test
    void addMember_ShouldThrowDuplicateException_WhenMemberExistsInGroup() {
        // Arrange
        int groupId = 1;
        int userId = 1;
        GroupMemberEntity groupMemberEntity = new GroupMemberEntity();

        when(groupMemberRepository.findByGroupIdAndUserId(groupId, userId)).thenReturn(groupMemberEntity);

        // Act & Assert
        assertThrows(DuplicateException.class, () -> groupService.addMember(groupId, userId));
        verify(groupMemberRepository, times(1)).findByGroupIdAndUserId(groupId, userId);
        verify(groupMemberRepository, never()).save(any(GroupMemberEntity.class));
    }

    @Test
    void addMember_ShouldSaveNewGroupMember_WhenMemberDoesNotExistInGroup() {
        // Arrange
        int groupId = 1;
        int userId = 1;
        GroupMemberEntity groupMemberEntity = null;

        when(groupMemberRepository.findByGroupIdAndUserId(groupId, userId)).thenReturn(groupMemberEntity);

        // Act
        groupService.addMember(groupId, userId);

        // Assert
        verify(groupMemberRepository, times(1)).findByGroupIdAndUserId(groupId, userId);
        verify(groupMemberRepository, times(1)).save(any(GroupMemberEntity.class));
    }



    @Test
    void getUserByGroup_WithValidGroupId_ShouldReturnUserDtoList() {
        // Arrange
        int groupId = 1;
        GroupEntity groupEntity = new GroupEntity();
        groupEntity.setId(groupId);
        List<GroupMemberEntity> groupMembers = new ArrayList<>();
        GroupMemberEntity groupMemberEntity = new GroupMemberEntity();
        groupMemberEntity.setUserId(1);
        groupMembers.add(groupMemberEntity);

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(groupEntity));
        when(groupMemberRepository.findByGroupId(groupId)).thenReturn(groupMembers);
        when(userRepository.findById(anyInt())).thenReturn(Optional.of(new UserEntity()));
        when(modelMapper.map(any(), any())).thenReturn(new UserDto());

        // Act
        List<UserDto> userDtoList = groupService.getUserByGroup(groupId);

        // Assert
        assertNotNull(userDtoList);
        assertEquals(groupMembers.size(), userDtoList.size());
        verify(groupRepository, times(1)).findById(groupId);
        verify(groupMemberRepository, times(1)).findByGroupId(groupId);
        verify(userRepository, times(groupMembers.size())).findById(anyInt());
        verify(modelMapper, times(groupMembers.size())).map(any(), any());
    }



    @Test
    void deleteGroup_ShouldThrowNotCanDoException_WhenAnyShoppingHasStatusZero() {
        // Arrange
        int groupId = 1;
        List<GroupShoppingEntity> groupShoppings = new ArrayList<>();
        GroupShoppingEntity groupShoppingEntity = new GroupShoppingEntity();
        groupShoppingEntity.setShoppingId(1);
        groupShoppings.add(groupShoppingEntity);
        ShoppingEntity shoppingEntity = new ShoppingEntity();
        shoppingEntity.setStatus(0);

        when(groupShoppingRepository.findByGroupId(groupId)).thenReturn(groupShoppings);
        when(shoppingRepository.findById(anyInt())).thenReturn(Optional.of(shoppingEntity));

        // Act & Assert
        assertThrows(NotCanDoException.class, () -> groupService.deleteGroup(groupId));
        verify(groupShoppingRepository, times(1)).findByGroupId(groupId);
        verify(shoppingRepository, times(groupShoppings.size())).findById(anyInt());
        verify(groupRepository, never()).deleteById(anyInt());
    }


    @Test
    void updateGroup_ShouldUpdateGroup_WithValidData() {
        // Arrange
        int groupId = 1;
        GroupDto groupDto = new GroupDto();
        groupDto.setId(groupId);
        groupDto.setName("Updated Group");
        groupDto.setImage("updated_image.jpg");

        GroupEntity groupEntity = new GroupEntity();
        groupEntity.setId(groupId);
        groupEntity.setName("Old Group");
        groupEntity.setImage("old_image.jpg");

        when(groupRepository.findById(groupId)).thenReturn(Optional.of(groupEntity));
        when(groupRepository.save(any())).thenReturn(groupEntity);

        // Act
        groupService.updateGroup(groupDto);

        // Assert
        assertEquals(groupDto.getName(), groupEntity.getName());
        assertEquals(groupDto.getImage(), groupEntity.getImage());
        verify(groupRepository, times(1)).findById(groupId);
        verify(groupRepository, times(1)).save(groupEntity);
    }
}

