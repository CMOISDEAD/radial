package com.unilocal.backend.controllers;

import com.unilocal.backend.models.User;
import com.unilocal.backend.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
  @Autowired
  UserService userService;

  @GetMapping("/all")
  public ResponseEntity<List<User>> all() {
    return ResponseEntity.status(200).body(userService.getAll());
  }
}

// User user = new User("camilo", "doom", "camilo@email.com", "123",
// "colombia","Armenia");
