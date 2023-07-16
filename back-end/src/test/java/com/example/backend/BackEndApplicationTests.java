package com.example.backend;

import com.example.backend.entities.UserEntity;
import com.example.backend.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackEndApplicationTests {
	@Mock
	@Autowired
	UserService service;

	@Test
	void contextLoads() {
		UserEntity user = new UserEntity();
		

	}

}
