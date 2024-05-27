package com.test.rentify.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.rentify.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
