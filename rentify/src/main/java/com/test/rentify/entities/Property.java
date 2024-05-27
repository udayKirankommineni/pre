package com.test.rentify.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="property")
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String description;
	private String placeArea;
	private Integer bedrooms;
	private Integer bathrooms;
	private String hospitalsNearby;
	private String collegesNearby;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPlaceArea() {
		return placeArea;
	}

	public void setPlaceArea(String placeArea) {
		this.placeArea = placeArea;
	}

	public Integer getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(Integer bedrooms) {
		this.bedrooms = bedrooms;
	}

	public Integer getBathrooms() {
		return bathrooms;
	}

	public void setBathrooms(Integer bathrooms) {
		this.bathrooms = bathrooms;
	}

	public String getHospitalsNearby() {
		return hospitalsNearby;
	}

	public void setHospitalsNearby(String hospitalsNearby) {
		this.hospitalsNearby = hospitalsNearby;
	}

	public String getCollegesNearby() {
		return collegesNearby;
	}

	public void setCollegesNearby(String collegesNearby) {
		this.collegesNearby = collegesNearby;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
