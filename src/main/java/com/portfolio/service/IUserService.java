package com.portfolio.service;

import java.util.List;

import com.portfolio.model.User;

public interface IUserService {

	public List<User> getUsers();
	
	public void saveUser(User user);
	
	public void deleteUser(Long id);
	
	public User findUser(Long id);
}
