package com.test.rentify.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.rentify.dao.UserRepository;
import com.test.rentify.entities.User;

@Service
public class UserService {
	@Autowired
    private UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
