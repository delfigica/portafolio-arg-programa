package com.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.model.User;
import com.portfolio.repository.UserRepository;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<User> getUsers() {
		List<User> users = userRepo.findAll();
		return users;
	}

	@Override
	public void saveUser(User user) {
		userRepo.save(user);
		
	}

	@Override
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
		
	}

	@Override
	public User findUser(Long id) {
		User user = userRepo.findById(id).orElse(null);
		return user;
	}

}
