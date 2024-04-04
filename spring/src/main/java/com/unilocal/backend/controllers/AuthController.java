package com.unilocal.backend.controllers;

import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.service.UserService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

class AuthRequest {
  public String username;
  public String password;
}

@RestController
@RequestMapping("/auth")
public class AuthController {
  @Autowired
  UserService userService;

  /**
   * Login a user
   *
   * @param request user credentials
   * @return HTTP response with the user logged in and HTTP status
   */
  @PostMapping("/login")
  public ResponseEntity<User> login(@RequestBody AuthRequest request) {
    Optional<User> user = userService.findByUsername(request.username);
    System.out.println(user.isPresent());
    if (user.isPresent() && user.get().getPassword().equals(request.password)) {
      return ResponseEntity.status(200).body(user.get());
    }
    return ResponseEntity.status(401).build();
  }

  /**
   * Register a new user
   *
   * @param user user to register
   * @return http response with the user created and HTTP status
   */
  @PostMapping("/register")
  public ResponseEntity<User> login(@RequestBody() RegisterUserDTO user) {
    Optional<User> existingUser = userService.findByUsername(user.username());
    if (existingUser.isPresent()) {
      return ResponseEntity.status(409).build();
    }
    return ResponseEntity.status(201).body(userService.save(user));
  }
}
