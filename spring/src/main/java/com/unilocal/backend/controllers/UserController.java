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

  /**
   * get a list with all users
   *
   * @return list with all users
   */
  @GetMapping("/all")
  public ResponseEntity<List<User>> all() {
    return ResponseEntity.status(200).body(userService.getAll());
  }

  /**
   * get an user by id
   *
   * @param username username of the user
   * @return user with the given username
   */
  @GetMapping("/username/{id}")
  public ResponseEntity<Optional<User>> byUsername(String username) {
    return ResponseEntity.status(200).body(
        userService.findByUsername(username));
  }

  /**
   * update an user with the given user id
   *
   * @param user user with new properties
   * @return the updated user
   */
  @GetMapping("/update/{id}")
  public ResponseEntity<User> update(UpdateUserDTO user) {
    User updated = userService.update(user);
    return ResponseEntity.status(200).body(updated);
  }

  /**
   * delete an user with the given id
   *
   * @param id id of the user to delete
   * @return message with the result of the operation
   */
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<String> delete(@PathVariable("id") String id) {
    userService.delete(id);
    return ResponseEntity.status(200).body("User deleted successfully!");
  }
}
