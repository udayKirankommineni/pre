package com.test.rentify.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.rentify.dao.PropertyRepository;
import com.test.rentify.entities.Property;

@Service
public class PropertyService {
	@Autowired
    private PropertyRepository propertyRepository;

    public Property save(Property property) {
        return propertyRepository.save(property);
    }

    public List<Property> findByUserId(Long userId) {
        return propertyRepository.findByUserId(userId);
    }

    public List<Property> findAll() {
        return propertyRepository.findAll();
    }

    public void delete(Long id) {
        propertyRepository.deleteById(id);
    }

    public Property findById(Long id) {
        return propertyRepository.findById(id).orElse(null);
    }
}
