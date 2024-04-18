package com.unilocal.backend.controllers;

import com.unilocal.backend.dto.LoginUserDTO;
import com.unilocal.backend.dto.RecoverPasswordDTO;
import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.TokenDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.service.AuthService;
import com.unilocal.backend.service.UserService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  @Autowired
  AuthService authService;
  @Autowired
  UserService userService;

  /**
   * Login a user
   *
   * @param request user credentials
   * @return HTTP response with the user logged in and HTTP status
   */
  @PostMapping("/login")
  public ResponseEntity<TokenDTO> login(@RequestBody LoginUserDTO user)
      throws Exception {
    TokenDTO jwt = authService.login(user);
    return ResponseEntity.status(200).body(jwt);
  }

  /**
   * Register a new user
   *
   * @param request user to register
   * @return http response with the user created and HTTP status
   */
  @PostMapping("/register")
  public ResponseEntity<User> register(@RequestBody() RegisterUserDTO request) {
    Optional<User> existing = userService.findByUsername(request.username());
    if (existing.isPresent())
      return ResponseEntity.status(409).build();
    User user = authService.register(request);
    return ResponseEntity.status(201).body(user);
  }

  // recover password
  @PostMapping("/recover")
  public ResponseEntity<String> recover(@RequestBody RecoverPasswordDTO dto) throws Exception {
    authService.recoverPassword(dto.email());
    return ResponseEntity.status(200).body("email sent to " + dto.email());
  }
}
