package com.portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SKILLS")
public class Skill {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "percentage")
	private Number percentage;

	@Column(name = "url")
	private String url;
	
	public Skill(Long id, String name, Number percentage, String url) {
		super();
		this.id = id;
		this.name = name;
		this.percentage = percentage;
		this.url = url;
	}

	public Skill() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Number getPercentage() {
		return percentage;
	}

	public void setPercentage(Number percentage) {
		this.percentage = percentage;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
