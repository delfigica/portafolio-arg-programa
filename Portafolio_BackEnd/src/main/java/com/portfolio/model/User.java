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
@Table(name = "USERS")
public class User {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "DESCRIPTION")
	private String description;

	@Column(name = "name")
	private String name;

	@Column(name = "USER_IMAGE")
	private String userImage;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Experience.class, orphanRemoval = true)
	@JoinColumn(name = "PK_USER", referencedColumnName = "id", nullable = false)
	private List<Experience> experiences;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Education.class, orphanRemoval = true)
	@JoinColumn(name = "PK_USER", referencedColumnName = "id", nullable = false)
	private List<Education> educations;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Proyect.class, orphanRemoval = true)
	@JoinColumn(name = "PK_USER", referencedColumnName = "id", nullable = false)
	private List<Proyect> proyects;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Skill.class, orphanRemoval = true)
	@JoinColumn(name = "PK_USER", referencedColumnName = "id", nullable = false)
	private List<Skill> skills;

	public User(Long id, String title, String description, String name, String userImage, List<Experience> experiences,
			List<Education> educations, List<Proyect> proyects, List<Skill> skills) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.name = name;
		this.userImage = userImage;
		this.experiences = experiences;
		this.educations = educations;
		this.proyects = proyects;
		this.skills = skills;
	}

	public User() {
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String gerUserImage() {
		return userImage;
	}

	public void setUserImage(String userImage) {
		this.userImage = userImage;
	}

	public List<Experience> getExperiences() {
		return experiences;
	}

	public void setExperiences(List<Experience> experiences) {
		this.experiences = experiences;
	}

	public void deleteExperience(Experience experience) {
		this.experiences.remove(experience);
	}

	public List<Education> getEducations() {
		return educations;
	}

	public void setEducations(List<Education> educations) {
		this.educations = educations;
	}

	public void deleteEducation(Education education) {
		this.educations.remove(education);
	}

	public List<Proyect> getProyects() {
		return proyects;
	}

	public void setProyects(List<Proyect> proyects) {
		this.proyects = proyects;
	}

	public void deleteProyect(Proyect proyect) {
		this.proyects.remove(proyect);
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

	public void deleteSkill(Skill skill) {
		this.skills.remove(skill);
	}
}
