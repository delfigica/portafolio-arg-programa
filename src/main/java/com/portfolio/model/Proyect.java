package com.portfolio.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="PROYECTS")
public class Proyect {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "TITLE")
	private String title;
	
	@Column(name = "DESCRIPTION")
	private String description;
	
	@Column(name = "URL")
	private String url;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity = Skill.class)
	@JoinColumn(name = "PK_PROYECT", referencedColumnName = "id", nullable = false)
	private List<Skill> tecnologies;

	public Proyect(Long id, String title, String description, String url, List<Skill> tecnologies) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.url = url;
		this.tecnologies = tecnologies;
	}

	public Proyect() {
		super();
	}

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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public List<Skill> getTecnologies() {
		return tecnologies;
	}

	public void setTecnologies(List<Skill> tecnologies) {
		this.tecnologies = tecnologies;
	}
}
