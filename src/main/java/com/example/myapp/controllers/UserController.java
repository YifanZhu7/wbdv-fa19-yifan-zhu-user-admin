package com.example.myapp.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.models.User;

@RestController
public class UserController {
	private User[] users = {
			new User(1, "alice","alice","Alice","Wonderland","Student"),
			new User(2, "yifan","yifan","Yifan","Zhu","Faculty"),
			new User(3, "Sissi","sissi","Sissi","Zeng","Admin"),
	};
	List<User> userArrayList = new ArrayList(Arrays.asList(users));
	@GetMapping("/users")
	public User[] findAllUsers() {
		return users;
	} 
	@DeleteMapping("/users/{userId}")
		public User[] deleteUser(@PathVariable("userId") int userId) {
		User u = null;
		for(User user:userArrayList) {
			if(user.getId() == userId) {
				u = user;
			}
			userArrayList.remove(u);
		}
		return users;
		}
		
			
}
