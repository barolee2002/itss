package com.example.backend.dtos;

import lombok.Data;

import javax.persistence.Column;
import java.time.LocalDate;
@Data
public class Register {

    private String username;

    private String password;
    private String avatar;
    private String name;

    private String gender;
    private String email;
    private String address;
}
