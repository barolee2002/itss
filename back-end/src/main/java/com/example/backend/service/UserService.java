package com.example.backend.service;

import com.example.backend.dtos.Login;
import com.example.backend.dtos.Register;
import com.example.backend.dtos.UserDto;
import com.example.backend.entities.UserEntity;
import com.example.backend.exception.DuplicateException;
import com.example.backend.exception.NotFoundException;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import static java.time.LocalDate.now;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    public UserDto login(Login login) {
        UserEntity user = userRepository.findByUsername(login.getUsername());
        UserDto userDto = new UserDto();
        if (user == null) {
            throw new NotFoundException("Tên đăng nhập không đúng");
        } else if(!(user.getPassword()).equals(login.getPassword())) {
            throw new NotFoundException("Mật khẩu không đúng");
        } else {
            userDto = modelMapper.map(user,UserDto.class);
        }
        return userDto;

    }
    public void register(Register register) {
        UserEntity user = userRepository.findByUsername(register.getUsername());
        if (user != null) {
            throw new DuplicateException("Tên đăng nhập đã sử dụng");
        } else {
            UserEntity newUser = new UserEntity();
            newUser.setUsername(register.getUsername());
            newUser.setPassword(register.getPassword());
            newUser.setEmail(register.getEmail());
            newUser.setCreateAt(now());
            newUser.setStatus(1);
            userRepository.save(newUser);
        }
    }
    public String updateUser(Integer id, UserDto userDto) {

    }

}
