package com.example.week3Assessment.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/")	
	public ModelAndView index(User user) {
		ModelAndView mv = new ModelAndView("user/index");
		mv.addObject("users", userRepository.findAll());
		return mv;
	
	}
		
	@GetMapping("showUsers")
	public ModelAndView showUsers(User user) {
		ModelAndView mv = new ModelAndView("user/showUsers");
		mv.addObject("users", userRepository.findAll());
		return mv;
	}

	@GetMapping("newUser")
	public ModelAndView newUser(User user) {
		ModelAndView mv = new ModelAndView("user/newUser");
		return mv;
	}
	
	@PostMapping("user/newUser")
	public ModelAndView createUser(User user) {
		ModelAndView mv = new ModelAndView("user/result");
		User newUser = userRepository.save(user);
		mv.addObject("newUser", newUser);
		return mv;
	}
	
	@DeleteMapping("/user/delete/{id}")
	public ModelAndView deleteUser(@PathVariable("id") long id) {
		ModelAndView mv = new ModelAndView("redirect:/showUsers");
		userRepository.deleteById(id);
		return mv;
	}
	
}
