package com.unilocal.backend.service;

import com.unilocal.backend.dto.EmailDTO;
import com.unilocal.backend.dto.LoginUserDTO;
import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.TokenDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.utils.JWTUtils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

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
  private final EmailService emailService;

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

    TokenDTO jwt = new TokenDTO(jwtUtils.generateToken(user.get().getEmail(), token));

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
    request = new RegisterUserDTO(request.name(), request.username(),
        hashedPassword, request.email(), request.image(), request.city(), request.country());
    User user = userService.save(request);
    return user;
  }

  /**
   * generate a token and link for recover password
   *
   * @param email user email
   * @throws Exception email error
   */
  public void generateLink(String email) throws Exception {
    User user = userService.findByEmail(email).orElseThrow();
    if (user == null)
      throw new Exception("User not found");
    Map<String, Object> map = new HashMap<>();
    map.put("id", user.getId());
    map.put("email", user.getEmail());
    TokenDTO token = new TokenDTO(jwtUtils.generateToken(user.getEmail(), map));
    String url = "http://localhost:5173/auth/recover/" + token.token().toString();
    System.out.println(url);
    // TODO: send an html button with the token on http request body
    EmailDTO message = new EmailDTO(email, "Recover Password, Link", url);
    emailService.sendEmail(message);
  }

  /**
   * updates the user password
   *
   * @param token    jwt token with user credentials
   * @param password new password
   * @return user with updated password
   */
  public User recoverPassword(String token, String password) {
    Jws<Claims> jwt = jwtUtils.parseJwt(token);
    Claims payload = jwt.getPayload();
    User user = userService.updatePassword(payload.get("id").toString(), password);
    return user;
  }
}
