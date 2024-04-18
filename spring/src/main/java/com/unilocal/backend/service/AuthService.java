package com.unilocal.backend.service;

import com.unilocal.backend.dto.LoginUserDTO;
import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.TokenDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.utils.JWTUtils;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {
  private final UserService userService;
  private final JWTUtils jwtUtils;

  /**
   * Login in the system
   *
   * @param request LoginUserDTO with the user credentials
   * @return JWT Token with the credentials
   * @throws Exception if the password is incorrect
   * @throws throw     new Exception("The password is incorrect");
   */
  public TokenDTO login(LoginUserDTO request) throws Exception {
    Optional<User> user = userService.findByUsername(request.username());
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    if (user.isPresent() &&
        !encoder.matches(request.password(), user.get().getPassword())) {
      throw new Exception("The password is incorrect");
    }
    Map<String, Object> token = new HashMap<>();
    token.put("rol", "user");
    token.put("username", user.get().getUsername());
    token.put("id", user.get().getId().toString());

    TokenDTO jwt =
        new TokenDTO(jwtUtils.generateToken(user.get().getEmail(), token));

    return jwt;
  }

  /**
   * Register a new user in the system
   *
   * @param request RegisterDTO with the user information
   * @return User created
   */
  public User register(RegisterUserDTO request) {
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    String hashedPassword = encoder.encode(request.password());
    request =
        new RegisterUserDTO(request.name(), request.username(), request.email(),
                            hashedPassword, request.image(), request.city());
    User user = userService.save(request);
    return user;
  }
}
