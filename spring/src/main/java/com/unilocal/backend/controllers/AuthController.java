package com.unilocal.backend.controllers;

import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.TokenDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.service.UserService;
import com.unilocal.backend.utils.JWTUtils;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
  @Autowired UserService userService;
  private JWTUtils jwtUtils;

  /**
   * Login a user
   *
   * @param request user credentials
   * @return HTTP response with the user logged in and HTTP status
   */
  @PostMapping("/login")
  public ResponseEntity<TokenDTO> login(@RequestBody AuthRequest request)
      throws Exception {
    Optional<User> user = userService.findByUsername(request.username);
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    if (user.isPresent() &&
        encoder.matches(request.password, user.get().getPassword())) {
      throw new Exception("The password is incorrect");
    }
    Map<String, Object> token = new HashMap<>();
    token.put("rol", "user");
    token.put("username", user.get().getUsername());
    token.put("id", user.get().getId().toString());

    TokenDTO response =
        new TokenDTO(jwtUtils.generateToken(user.get().getEmail(), token));

    return ResponseEntity.status(200).body(response);
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
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    String hashedPassword = encoder.encode(user.password());
    user = new RegisterUserDTO(user.name(), user.username(), hashedPassword,
                               user.email(), user.image(), user.city());
    return ResponseEntity.status(201).body(userService.save(user));
  }
}
