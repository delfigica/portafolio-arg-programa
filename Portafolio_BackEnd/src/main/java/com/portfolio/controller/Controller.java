package com.portfolio.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.model.Education;
import com.portfolio.model.Experience;
import com.portfolio.model.Proyect;
import com.portfolio.model.Skill;
import com.portfolio.model.User;
import com.portfolio.service.IUserService;

@RestController
public class Controller {

	@Autowired
	private IUserService iUser;

	@GetMapping("/users/get")
	public List<User> getUsers() {
		return iUser.getUsers();
	}

	@GetMapping("/users/get/{userId}")
	public User getUser(@PathVariable Long userId) {
		return iUser.findUser(userId);
	}

	@PostMapping("/user/generate")
	public String createUser(@RequestBody User user) {
		iUser.saveUser(user);
		return "El usuario se genero con éxito";
	}

	@DeleteMapping("/user/delete/{id}")
	public String deleteUser(@PathVariable Long id) {
		iUser.deleteUser(id);
		return "El usuario fue eliminado correctamente";
	}

	@PutMapping("/user/edit/{id}")
	public User editUser(@PathVariable Long id,
			@RequestParam("title") String newTitle,
			@RequestParam("description") String newDescription,
			@RequestParam("name") String newName,
			@RequestParam("file") MultipartFile image) {

		User user = iUser.findUser(id);

		user.setDescription(newDescription);
		user.setName(newName);
		user.setTitle(newTitle);
		if (!image.isEmpty()) {
			Path imageDirectory = Paths.get("src//main//resourse/images");
			String absoluteRoute = imageDirectory.toFile().getAbsolutePath();

			try {
				byte[] bytesImg = image.getBytes();
				Path fullPath = Paths.get(absoluteRoute + "//" + image.getOriginalFilename());
				Files.write(fullPath, bytesImg);

				user.setUserImage(image.getOriginalFilename());
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		iUser.saveUser(user);
		return user;
	}

	@GetMapping("/user/education/{userId}")
	public List<Education> getEducations(@PathVariable Long userId) {
		User user = iUser.findUser(userId);
		return user.getEducations();
	}

	@PostMapping("/user/education/generate/{userId}")
	public String createEducation(@PathVariable Long userId, @RequestBody Education education) {
		User user = iUser.findUser(userId);
		List<Education> educations = user.getEducations();
		educations.add(education);
		iUser.saveUser(user);
		return "Educacion creada con éxito";
	}

	@DeleteMapping("/user/education/delete/{userId}/{educationId}")
	public String deleteEducation(@PathVariable Long userId, @PathVariable Long educationId) {
		User user = iUser.findUser(userId);
		List<Education> educations = user.getEducations();

		educations.forEach((Education education) -> {
			if (education.getId().equals(educationId)) {
				user.deleteEducation(education);
				iUser.saveUser(user);
			}
		});

		return "Educación eliminada con éxito";
	}

	@PutMapping("/user/education/edit/{userId}/{educationId}")
	public String editEducation(@PathVariable Long userId,
			@PathVariable Long educationId,
			@RequestParam("name_institution") String newName,
			@RequestParam("description") String newDescription) {
		User user = iUser.findUser(userId);
		List<Education> educations = user.getEducations();

		educations.forEach((Education education) -> {
			if (education.getId().equals(educationId)) {
				education.setDescription(newDescription);
				education.setName_institution(newName);
				iUser.saveUser(user);
			}
		});

		return "Educación editada con éxito";
	}

	@GetMapping("/user/experience/{userId}")
	public List<Experience> getExperiences(@PathVariable Long userId) {
		User user = iUser.findUser(userId);
		return user.getExperiences();
	}

	@PostMapping("/user/experience/generate/{userId}")
	public String createExperience(@PathVariable Long userId, @RequestBody Experience experience) {
		User user = iUser.findUser(userId);
		List<Experience> experiences = user.getExperiences();
		experiences.add(experience);
		iUser.saveUser(user);
		return "Experiencia creada con éxito";
	}

	@DeleteMapping("/user/experience/delete/{userId}/{experienceId}")
	public String deleteExperience(@PathVariable Long userId, @PathVariable Long experienceId) {
		User user = iUser.findUser(userId);
		List<Experience> experiences = user.getExperiences();

		experiences.forEach((Experience experience) -> {
			if (experience.getId().equals(experienceId)) {
				user.deleteExperience(experience);
				iUser.saveUser(user);
			}
		});
		return "Experiencia eliminada con éxito";
	}

	@PutMapping("/user/experience/edit/{userId}/{experienceId}")
	public String editExperience(@PathVariable Long userId,
			@PathVariable Long experienceId,
			@RequestParam("name_institution") String newName,
			@RequestParam("description") String newDescription) {
		User user = iUser.findUser(userId);
		List<Experience> experiences = user.getExperiences();

		experiences.forEach((Experience experience) -> {
			if (experience.getId().equals(experienceId)) {
				experience.setDescription(newDescription);
				experience.setName_institution(newName);
				iUser.saveUser(user);
			}
		});
		return "Experiencia editada con éxito";
	}

	@GetMapping("/user/proyect/{userId}")
	public List<Proyect> getProyect(@PathVariable Long userId) {
		User user = iUser.findUser(userId);
		return user.getProyects();
	}

	@PostMapping("/user/proyect/generate/{userId}")
	public String createProyect(@PathVariable Long userId, @RequestBody Proyect proyect) {
		User user = iUser.findUser(userId);
		List<Proyect> proyects = user.getProyects();
		proyects.add(proyect);
		iUser.saveUser(user);
		return "Proyecto agregado con éxito";
	}

	@DeleteMapping("/user/proyect/delete/{userId}/{proyectId}")
	public String deleteProyect(@PathVariable Long userId, @PathVariable Long proyectId) {
		User user = iUser.findUser(userId);
		List<Proyect> proyects = user.getProyects();

		proyects.forEach((Proyect proyect) -> {
			if (proyect.getId().equals(proyectId)) {
				user.deleteProyect(proyect);
				iUser.saveUser(user);
			}
		});
		return "Proyecto eliminado con éxito";
	}

	@PutMapping("/user/proyect/edit/{userId}/{proyectId}")
	public String editProyect(@PathVariable Long userId,
			@PathVariable Long proyectId,
			@RequestParam("title") String newTitle,
			@RequestParam("description") String newDescription,
			@RequestParam("url") String newUrl) {
		User user = iUser.findUser(userId);
		List<Proyect> proyects = user.getProyects();

		proyects.forEach((Proyect proyect) -> {
			if (proyect.getId().equals(proyectId)) {
				proyect.setDescription(newDescription);
				proyect.setTitle(newTitle);
				proyect.setUrl(newUrl);
				iUser.saveUser(user);
			}
		});
		return "Proyecto editado con éxito";
	}

	@PostMapping("/user/proyect/addTecnology/{userId}/{idSkill}/{proyectId}")
	public String addTecnology(@PathVariable Long userId, @PathVariable Long proyectId, @PathVariable Long idSkill) {
		User user = iUser.findUser(userId);
		List<Proyect> proyects = user.getProyects();
		List<Skill> skills = user.getSkills();

		proyects.forEach((Proyect proyect) -> {
			if (proyect.getId().equals(proyectId)) {
				List<Skill> tecnologies = proyect.getTecnologies();
				skills.forEach((Skill skill) -> {
					if (skill.getId().equals(idSkill)) {
						tecnologies.add(skill);
					}
				});
				iUser.saveUser(user);
			}
		});
		return "Tecnologia añadida con éxito al proyecto";
	}

	@GetMapping("/user/skill/{userId}")
	public List<Skill> getSkills(@PathVariable Long userId) {
		User user = iUser.findUser(userId);
		return user.getSkills();
	}

	@PostMapping("/user/skill/generate/{userId}")
	public String createSkill(@PathVariable Long userId, @RequestBody Skill skill) {
		User user = iUser.findUser(userId);
		List<Skill> skills = user.getSkills();
		skills.add(skill);
		iUser.saveUser(user);
		return "Skill creada con éxito";
	}

	@DeleteMapping("/user/skill/delete/{userId}/{skillId}")
	public String deleteSkill(@PathVariable Long userId, @PathVariable Long skillId) {
		User user = iUser.findUser(userId);
		List<Skill> skills = user.getSkills();

		skills.forEach((Skill skill) -> {
			if (skill.getId().equals(skillId)) {
				user.deleteSkill(skill);
				iUser.saveUser(user);
			}
		});
		return "Skill eliminada con éxito";
	}

	@PutMapping("/user/skill/edit/{userId}/{skillId}")
	public String editSkill(@PathVariable Long userId,
			@PathVariable Long skillId,
			@RequestParam("name") String newName,
			@RequestParam("percentage") Number newPercentage,
			@RequestParam("url") String newUrl) {
		User user = iUser.findUser(userId);
		List<Skill> skills = user.getSkills();

		skills.forEach((Skill skill) -> {
			if (skill.getId().equals(skillId)) {
				skill.setPercentage(newPercentage);
				skill.setName(newName);
				skill.setUrl(newUrl);
				iUser.saveUser(user);
			}
		});
		return "Experiencia editada con éxito";
	}
}
