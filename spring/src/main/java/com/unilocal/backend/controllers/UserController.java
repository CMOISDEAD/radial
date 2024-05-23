package com.unilocal.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.unilocal.backend.dto.UpdateUserDTO;
import com.unilocal.backend.models.Place;
import com.unilocal.backend.models.User;
import com.unilocal.backend.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
  @Autowired
  UserService userService;

  /**
   * get a list with all users
   *
   * @return list with all users
   */
  @GetMapping("/all")
  public ResponseEntity<List<User>> all() {
    return ResponseEntity.status(200).body(userService.getAll());
  }

  @GetMapping("/user/{id}")
  public ResponseEntity<Optional<User>> byId(@PathVariable("id") String id) {
    Optional<User> user = userService.findById(id);
    return ResponseEntity.status(200).body(user);
  }

  /**
   * get an user by username
   *
   * @param username username of the user
   * @return user with the given username
   */
  @GetMapping("/username/{username}")
  public ResponseEntity<Optional<User>> byUsername(@PathVariable("username") String username) {
    Optional<User> user = userService.findByUsername(username);
    return ResponseEntity.status(200).body(user);
  }

  /**
   * update an user with the given user id
   *
   * @param user user with new properties
   * @return the updated user
   */
  @PutMapping("/update/{id}")
  public ResponseEntity<User> update(@RequestBody UpdateUserDTO user) {
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

  @GetMapping("/places/{id}")
  public ResponseEntity<List<Place>> getPlaces(@PathVariable("id") String id) {
    List<Place> places = userService.getPlaces(id);
    return ResponseEntity.status(200).body(places);
  }
}
