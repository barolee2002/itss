package com.example.backend.controller;

import com.example.backend.dtos.GroupDto;
import com.example.backend.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
