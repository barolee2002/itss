package com.example.backend.dtos;


import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class GroupDto {
    private String name;
    UserDto user;
    private LocalDate createAt;
    private LocalDate updateAt;
    List<UserDto> groupMembers;
}
