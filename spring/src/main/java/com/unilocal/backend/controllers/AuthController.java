package com.unilocal.backend.controllers;

import com.unilocal.backend.models.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

  @GetMapping("/login")
  public String login() {
    User user = new User("camilo", "doom", "camilo@email.com", "123",
        "colombia", "Armenia");
    return "Please login";
  }

  @PostMapping("/login")
  public String login(@RequestBody() String username) {
    return String.format("Hello %s!", username);
  }
}
