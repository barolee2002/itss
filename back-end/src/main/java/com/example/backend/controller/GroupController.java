package com.example.backend.controller;

import com.example.backend.dtos.GroupDto;
import com.example.backend.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Validated
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:3000")
public class GroupController {
    @Autowired
    GroupService groupService;
    @GetMapping("/groups")
    public List<GroupDto> getAllGroups() {
        List<GroupDto> response = groupService.getAllGroups();
        return response;
    }
    @GetMapping("/user/groups/{id}")
    public List<GroupDto> getGroupsByUser(@PathVariable("id") Integer id) {
        List<GroupDto> response = groupService.getGroupByMember(id);
        return response;
    }
    @GetMapping("/user/leader/{id}")
    public List<GroupDto> getGroupByLeader(@PathVariable Integer id) {
        List<GroupDto> response = groupService.getGroupByLeader(id);
        return  response;
    }
    @PostMapping("/group/share/{shoppingId}/{groupId}")
    public String shareShoppingToGroup(
            @PathVariable("shoppingId") Integer shoppingId,
            @PathVariable("groupId") Integer groupId
            ) {
            groupService.shareShopping(shoppingId, groupId);
            return "success";
    }
    @GetMapping("/group/{id}")
    public GroupDto getGroupDetail( @PathVariable("id") Integer id) {
        return groupService.getDetailGroup(id);
    }
    @DeleteMapping("group/{groupId}/{memberId}")
    public String deleteMember(
            @PathVariable("groupId") Integer groupId,
            @PathVariable("memberId") Integer memberId
    ){
        groupService.deleteMember(groupId, memberId);
        return "success";
    }
    @PostMapping("group/adding/{id}")
    public String addGroup(
            @PathVariable("id") Integer id,
            @RequestBody Integer memberId
            ) {
        groupService.addMember(id, memberId);
        return "Success";
    }
    @PutMapping("group/attribute/{id}")
    public String addBuyUser(@PathVariable("id") Integer id,@RequestBody Integer userId) {
        groupService.addBuyUser(id, userId);
        return "Success";
    }


}
