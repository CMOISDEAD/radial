package com.unilocal.backend.controllers;

import com.unilocal.backend.dto.UpdateUserDTO;
import com.unilocal.backend.models.User;
import com.unilocal.backend.service.UserService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
  @Autowired UserService userService;

  @GetMapping("/all")
  public ResponseEntity<List<User>> all() {
    return ResponseEntity.status(200).body(userService.getAll());
  }

  @GetMapping("/username/{id}")
  public ResponseEntity<Optional<User>> byUsername(String username) {
    return ResponseEntity.status(200).body(
        userService.findByUsername(username));
  }

  @GetMapping("/update/{id}")
  public ResponseEntity<User> update(UpdateUserDTO user) {
    return ResponseEntity.status(200).body(userService.update(user));
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<String> delete(@PathVariable("id") String id) {
    userService.delete(id);
    return ResponseEntity.status(200).body("User deleted successfully!");
  }
}
