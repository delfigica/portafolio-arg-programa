package com.portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="EDUCATION")
public class Education {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "NAME_INSTITUTION")
	private String name_institution;
	
	@Column(name = "DESCRIPTION")
	private String description;

	public Education(Long id, String name_institution, String description) {
		super();
		this.id = id;
		this.name_institution = name_institution;
		this.description = description;
	}

	public Education() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName_institution() {
		return name_institution;
	}

	public void setName_institution(String name_institution) {
		this.name_institution = name_institution;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
