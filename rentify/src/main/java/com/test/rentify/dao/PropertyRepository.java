package com.test.rentify.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.rentify.entities.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
	List<Property> findByUserId(Long userId);
}
