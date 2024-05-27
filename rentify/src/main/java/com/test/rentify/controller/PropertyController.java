package com.test.rentify.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.rentify.entities.Property;
import com.test.rentify.entities.User;
import com.test.rentify.services.PropertyService;

@RestController
@RequestMapping("/api/properties")
public class PropertyController {
    @Autowired
    private PropertyService propertyService;

    @PostMapping
    public Property postProperty(@RequestBody Property property) {
        return propertyService.save(property);
    }

    @GetMapping("/seller/{userId}")
    public List<Property> getPropertiesBySeller(@PathVariable Long userId) {
        return propertyService.findByUserId(userId);
    }

    @GetMapping
    public List<Property> getAllProperties() {
        return propertyService.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyService.delete(id);
    }

    @PutMapping("/{id}")
    public Property updateProperty(@PathVariable Long id, @RequestBody Property property) {
        Property existingProperty = propertyService.findById(id);
        if (existingProperty != null) {
            existingProperty.setTitle(property.getTitle());
            existingProperty.setDescription(property.getDescription());
            existingProperty.setPlaceArea(property.getPlaceArea());
            existingProperty.setBedrooms(property.getBedrooms());
            existingProperty.setBathrooms(property.getBathrooms());
            existingProperty.setHospitalsNearby(property.getHospitalsNearby());
            existingProperty.setCollegesNearby(property.getCollegesNearby());
            return propertyService.save(existingProperty);
        }
        return null;
    }
    
    @GetMapping("/property/{userId}")
    public Property getProperty(@PathVariable Long userId) {
    	return propertyService.findById(userId);
    }
}
