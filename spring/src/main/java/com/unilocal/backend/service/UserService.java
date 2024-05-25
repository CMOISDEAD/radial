package com.unilocal.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.unilocal.backend.dto.RegisterUserDTO;
import com.unilocal.backend.dto.UpdateUserDTO;
import com.unilocal.backend.models.Place;
import com.unilocal.backend.models.User;
import com.unilocal.backend.models.UserRole;
import com.unilocal.backend.repos.UserRepository;

@Service
public class UserService {

  @Autowired
  UserRepository userRepository;
  @Autowired
  PlaceService placeService;

  /**
   * get all user in the system
   *
   * @return return a list of all users
   */
  public List<User> getAll() {
    return userRepository.findAll();
  }

  /**
   * save a new user
   *
   * @param dto new user object
   * @return new user created
   */
  public User save(RegisterUserDTO dto) {
    User user = new User(UserRole.USER, dto.name(), dto.username(),
        dto.email(), dto.password(), dto.city(), dto.country());
    return userRepository.save(user);
  }

  /**
   * find user by id
   *
   * @param id user id
   * @return user fond by id
   */
  public Optional<User> findById(String id) {
    return userRepository.findById(id);
  }

  /**
   * find user by username
   *
   * @param username user username
   * @return user found by username
   */
  public Optional<User> findByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  /**
   * find user by email
   *
   * @param email user email
   * @return user found by email
   */
  public Optional<User> findByEmail(String email) {
    return userRepository.findByEmail(email);
  }

  /**
   * deletes a user
   *
   * @param id user id
   */
  public void delete(String id) {
    User user = userRepository.findById(id).orElseThrow();
    userRepository.delete(user);
  }

  /**
   * update an user
   *
   * @param user user dto with updated properties
   * @return user with updated properties
   * @throws throw new RuntimeException("User not found"); user not found
   */
  public User update(UpdateUserDTO user) {
    Optional<User> person = userRepository.findById(user.id());
    if (person.isEmpty())
      throw new RuntimeException("User not found");
    User updatedUser = person.get();
    updatedUser.setName(user.name());
    updatedUser.setEmail(user.email());
    updatedUser.setCity(user.city());
    updatedUser.setImage(user.image());
    userRepository.save(updatedUser);
    return updatedUser;

  }

  /**
   * update password of an user
   *
   * @param id       id of the user
   * @param password new password
   * @return user with updated password
   * @throws throw new RuntimeException("User not found"); user not found
   */
  public User updatePassword(String id, String password) {
     BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    Optional<User> person = userRepository.findById(id);
    if (person.isEmpty())
      throw new RuntimeException("User not found");
    User updatedUser = person.get();
    String hashedPassword = encoder.encode(password);
    updatedUser.setPassword(hashedPassword);
    userRepository.save(updatedUser);
    return updatedUser;

  }

  public List<Place> getPlaces(String id) {
    Optional<User> user = userRepository.findById(id);
    if (user.isEmpty())
      throw new RuntimeException("User not found");
    return placeService.findByUser_id(id);
  }
}
